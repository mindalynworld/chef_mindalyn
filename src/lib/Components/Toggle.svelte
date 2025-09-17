<script lang="ts">
    // TODO: EXPORT this prop to parent
  //let selectedOption = 'option1'; // Stores the currently selected option

  //let selectedOption = $state('option1');
  let { selectedOption = $bindable() } = $props();

  const options = [
    { value: 'option1', label: 'Food' },
    { value: 'option2', label: 'Film' },
    { value: 'option3', label: 'Crafts' },
  ];

  function selectOption(optionValue: string) {
    selectedOption = optionValue;
  }
</script>

<div class="button-group">
  {#each options as option}
    <button
      class:active={selectedOption === option.value}
      onclick={() => selectOption(option.value)}
    >
      {option.label}
    </button>
  {/each}
</div>

<style>
:root {
    --selected: black;
}

  .button-group {
    display: flex;
    gap: 8px; /* Spacing between buttons */
    flex-direction: row;
    justify-content: center;
  }

  button {
    font-family: "Roboto Mono";
    padding: 10px 15px;
    border: 1px solid var(--selected);
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
  }

  button.active {
    background-color: var(--selected);
    color: white;
    border-color: var(--selected);
  }

  button:hover {
    background-color: var(--selected);
    color: white;
    border-color: var(--selected);
  }
</style>