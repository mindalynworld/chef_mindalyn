import { d as attr, p as push, f as ensure_array_like, c as pop, h as attr_class, e as escape_html, i as bind_props, j as copy_payload, k as assign_payload, l as stringify } from "../../chunks/index.js";
function Card($$payload, $$props) {
  let { imgSrc, alt, caption } = $$props;
  $$payload.out += `<main><img${attr("src", imgSrc)}${attr("alt", alt)} class="svelte-wwxt9"></main>`;
}
function Gallery($$payload, $$props) {
  push();
  let { galleryData } = $$props;
  let colLength = Math.round(galleryData.length / 3);
  const each_array = ensure_array_like(galleryData);
  const each_array_1 = ensure_array_like(galleryData);
  const each_array_2 = ensure_array_like(galleryData);
  $$payload.out += `<main class="svelte-80zmsf"><div class="masonry wrapper switcher svelte-80zmsf"><div class="flow svelte-80zmsf"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { imgSrc, alt, caption } = each_array[i];
    if (i < colLength) {
      $$payload.out += "<!--[-->";
      Card($$payload, { imgSrc, alt, caption });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <div class="flow svelte-80zmsf"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let { imgSrc, alt, caption } = each_array_1[i];
    if (i >= colLength && i < colLength * 2) {
      $$payload.out += "<!--[-->";
      Card($$payload, { imgSrc, alt, caption });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <div class="flow svelte-80zmsf"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let { imgSrc, alt, caption } = each_array_2[i];
    if (i >= colLength * 2) {
      $$payload.out += "<!--[-->";
      Card($$payload, { imgSrc, alt, caption });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
  pop();
}
function Toggle($$payload, $$props) {
  push();
  let { selectedOption = void 0 } = $$props;
  const options = [
    { value: "option1", label: "Food" },
    { value: "option2", label: "Film" },
    { value: "option3", label: "Crafts" }
  ];
  const each_array = ensure_array_like(options);
  $$payload.out += `<div class="button-group svelte-ofmzi1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<button${attr_class("svelte-ofmzi1", void 0, { "active": selectedOption === option.value })}>${escape_html(option.label)}</button>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { selectedOption });
  pop();
}
const foodGalleryData = [
  {
    imgSrc: "static/images/food/SweetSalmonBowl.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/ChickenTortillaSoup.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/ChineseChickenWings.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/GreekYogurtEggs.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/MorocconTagine.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/MusclePasta.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/Oysters.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/PadKraPow.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/PadSeeEw.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/RicottaSquash.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/BreakfastSpread.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/ChickenThighs.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/7SalmonLemonPasta.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/10Fish.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/SardinePasta.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/Shakshuka.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/SpamEggAvoBowl.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/SpinachPasta.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/Sushi.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/SweetPotatoeChickpea.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/ThanksgivingSpread1.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/BeefBourguignon.jpeg",
    alt: "Beef Bourguignon in a bowl on table",
    caption: "Julia Child's Beef Bourguignon"
  },
  {
    imgSrc: "static/images/food/ThanksgivingSpread2.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/Udon.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/VietnameseVermicelli.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/Zaalouk.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/ZuchinniPancakes.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/1PersianChicken.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/2TaiwaneseChicken.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/3Donuts.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/4BreakfastTaco.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/5KimchiFriedRice.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/6Pasta.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/8TomatoSoup.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/food/9Caprese.jpeg",
    alt: "",
    caption: ""
  }
];
const filmGalleryData = [
  {
    imgSrc: "static/images/film/1.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/2.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/3.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/8.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/6.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/4.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/7.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/15.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/9.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/18.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/12.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/5.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/11.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/16.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/14.jpg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/film/10.jpg",
    alt: "",
    caption: ""
  }
];
const craftGalleryData = [
  {
    imgSrc: "static/images/crafts/saturn.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/crafts/roses.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/crafts/painting.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/crafts/skirtshirt.jpeg",
    alt: "",
    caption: ""
  },
  {
    imgSrc: "static/images/crafts/fishies.jpeg",
    alt: "",
    caption: ""
  }
];
function _page($$payload) {
  let selectedOption = "option1";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<main class="svelte-1wf1ryh"><link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&amp;family=Roboto:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet"> <h1>Chef Mindalyn</h1> `;
    Toggle($$payload2, {
      get selectedOption() {
        return selectedOption;
      },
      set selectedOption($$value) {
        selectedOption = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div${attr_class(`gallery ${stringify(selectedOption == "option1" ? "show" : "hide")}`, "svelte-1wf1ryh")}>`;
    Gallery($$payload2, { galleryData: foodGalleryData });
    $$payload2.out += `<!----></div> <div${attr_class(`gallery ${stringify(selectedOption == "option2" ? "show" : "hide")}`, "svelte-1wf1ryh")}>`;
    Gallery($$payload2, { galleryData: filmGalleryData });
    $$payload2.out += `<!----></div> <div${attr_class(`gallery ${stringify(selectedOption == "option3" ? "show" : "hide")}`, "svelte-1wf1ryh")}>`;
    Gallery($$payload2, { galleryData: craftGalleryData });
    $$payload2.out += `<!----></div></main>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
