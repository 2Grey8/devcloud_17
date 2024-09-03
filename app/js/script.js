  const selector = (
    selector1, class1, class2, class3, selector2, class4, class5, class6, class7, class8, class9, count
  ) => {
    let slider = document.querySelector(selector1);

    let container = document.createElement('div');
    container.classList.add(class1);
    slider.insertAdjacentElement('afterbegin', container);

    let track = document.createElement('div');
    track.classList.add(class2);
    container.insertAdjacentElement('afterbegin', track);

    let item = document.createElement('div');
    item.classList.add(class3);
    track.insertAdjacentElement('afterbegin', item);

    let group = document.querySelector(selector2);
    item.insertAdjacentElement('afterbegin', group);

    let btnPrev = document.createElement('button');
    btnPrev.classList.add(class4);
    btnPrev.classList.add(class5);
    container.insertAdjacentElement('afterend', btnPrev);

    let btnNext = document.createElement('button');
    btnNext.classList.add(class4);
    btnNext.classList.add(class6);
    container.insertAdjacentElement('afterend', btnNext);

    let dotsCount = count;
    let elem = dotsCount - 1;

    for (let i = 1; i <= elem; i++) {
      let itemCopy = item.cloneNode(true);
      track.insertAdjacentElement('afterbegin',itemCopy);
    }

    let dots = document.createElement('div');
    dots.classList.add(class7);
    container.insertAdjacentElement('afterend', dots);

    for (let i = 1; i <= count; i++) {
      if(i == 1){
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dot.classList.add(class9);
        dot.innerHTML = i;
        dots.insertAdjacentElement('beforeend', dot);
      } else {
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dot.innerHTML = i;
        dots.insertAdjacentElement('beforeend', dot);
      }
    }
  }

  selector(
    '.requirement__wrap',
    'requirement__container',
    'requirement__track',
    'requirement__item',
    '.requirement__group',
    'requirement__btn',
    'requirement__btn_next',
    'requirement__btn_prev',
    'requirement__dots',
    'requirement__dot',
    'requirement__dot_active',
    6
  );

  selector(
    '.design__wrap',
    'design__container',
    'design__track',
    'design__item',
    '.design__group',
    'design__btn',
    'design__btn_next',
    'design__btn_prev',
    'design__dots',
    'design__dot',
    'design__dot_active',
    6
  );

  selector(
    '.development__wrap',
    'development__container',
    'development__track',
    'development__item',
    '.development__group',
    'development__btn',
    'development__btn_next',
    'development__btn_prev',
    'development__dots',
    'development__dot',
    'development__dot_active',
    6
  );

  selector(
    '.testing__wrap',
    'testing__container',
    'testing__track',
    'testing__item',
    '.testing__group',
    'testing__btn',
    'testing__btn_next',
    'testing__btn_prev',
    'testing__dots',
    'testing__dot',
    'testing__dot_active',
    6
  );

  selector(
    '.service__wrap',
    'service__container',
    'service__track',
    'service__item',
    '.service__group',
    'service__btn',
    'service__btn_next',
    'service__btn_prev',
    'service__dots',
    'service__dot',
    'service__dot_active',
    6
  );

  const move = (selector3, selector4, selector5, selector6, selector7, selector8, selector9, class10) => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;

    const container = document.querySelector(selector3);
    const track = document.querySelector(selector4);
    const items = document.querySelectorAll(selector5);
    const dots = document.querySelector(selector6);
    const btnPrev = document.querySelector(selector7);
    const btnNext = document.querySelector(selector8);

    const itemsCount = items.length;
    const itemHeight = container.clientHeight/ slidesToShow;
    const movePosition = slidesToScroll * itemHeight;

    items.forEach((item) => {
      item.style.minHeight = `${itemHeight}px`;
    });

    btnNext.addEventListener('click', () => {
      const itemsUp = itemsCount - (Math.abs(position) + slidesToShow * itemHeight) / itemHeight;

      position -= itemsUp >= slidesToScroll ? movePosition : itemsUp * itemHeight;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.nextElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener('click', () => {
      const itemsUp = Math.abs(position) / itemHeight;

      position += itemsUp >= slidesToScroll ? movePosition : itemsUp * itemHeight;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.previousElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      track.style.transform = `translateY(${position}px)`;
    }

    const checkBtns = () => {
      btnPrev.disabled = position == 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemHeight;
    }

    checkBtns();
  }

  move(
    '.requirement__container',
    '.requirement__track',
    '.requirement__item',
    '.requirement__dots',
    '.requirement__btn_prev',
    '.requirement__btn_next',
    '.requirement__dot_active',
    'requirement__dot_active'
  );

  move(
    '.design__container',
    '.design__track',
    '.design__item',
    '.design__dots',
    '.design__btn_prev',
    '.design__btn_next',
    '.design__dot_active',
    'design__dot_active'
  );

  move(
    '.development__container',
    '.development__track',
    '.development__item',
    '.development__dots',
    '.development__btn_prev',
    '.development__btn_next',
    '.development__dot_active',
    'development__dot_active'
  );

  move(
    '.testing__container',
    '.testing__track',
    '.testing__item',
    '.testing__dots',
    '.testing__btn_prev',
    '.testing__btn_next',
    '.testing__dot_active',
    'testing__dot_active'
  );

  move(
    '.service__container',
    '.service__track',
    '.service__item',
    '.service__dots',
    '.service__btn_prev',
    '.service__btn_next',
    '.service__dot_active',
    'service__dot_active'
  );
