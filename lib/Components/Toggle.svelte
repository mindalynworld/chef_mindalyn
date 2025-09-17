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
    --primary: white;
    --primary-contrast: black;
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
    border: 1px solid var(--primary-contrast);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primary-contrast);
    cursor: pointer;
  }

  button.active {
    background-color: var(--primary-contrast);
    color: var(--primary);
    border-color: var(--primary-contrast);
  }

  button:hover {
    background-color: var(--primary-contrast);
    color: var(--primary);
    border-color: var(--primary-contrast);
  }
</style>