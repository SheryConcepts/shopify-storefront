export function animation_fade_down_to_up() {
  let elementForAnimation1 = document.querySelectorAll(".fade_down_to_up");
  // let elementForAnimation1Timer = document.querySelectorAll(".fade_down_to_up_delay");
  const observerForAnimation1 = new IntersectionObserver((item: any) => {
    item.map((subitem: any) => {
      if (subitem.isIntersecting) {
        subitem.target.classList.add("fade_down_to_up_view");
        subitem.target.classList.remove("fade_down_to_up_notView");
      }
    })
  })
  elementForAnimation1.forEach((item: any) => {
    // if(elementForAnimation1Timer){
    //FIXME
    // apply timing
    // }
    observerForAnimation1.observe(item);
  });


  let elementForAnimation2 = document.querySelectorAll(".scale_up_to_down_image");
  const observerForAnimation2 = new IntersectionObserver((item: any) => {
    item.map((subitem: any) => {
      if (subitem.isIntersecting) {
        subitem.target.classList.add("scale_up_to_down_image_view");
        subitem.target.classList.remove("scale_up_to_down_image_notView");
      }
    })
  })
  elementForAnimation2.forEach((item: any) => {
    observerForAnimation2.observe(item);
  });


  let elementForAnimation3 = document.querySelectorAll(".content_fading_animate");
  const observerForAnimation3 = new IntersectionObserver((item: any) => {
    item.map((subitem: any) => {
      if (subitem.isIntersecting) {
        setTimeout(() => {
          subitem.target.classList.add("content_fading_animate_view");
          subitem.target.classList.remove("content_fading_animate_notView");
        }, 150);
      }
    })
  })
  elementForAnimation3.forEach((item: any) => {
    observerForAnimation3.observe(item);
  });

}