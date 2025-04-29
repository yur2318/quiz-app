export const menu = () => {
  document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.chapter-item-title');

    titles.forEach(title => {
      title.addEventListener('click', function() {
        const linkList = this.nextElementSibling;
        const arrow = this.querySelector('.arrow'); // 矢印

        if (linkList.classList.contains('is-open')) {
          linkList.classList.remove('is-open');
          arrow.classList.remove('is-open'); // 矢印を戻す
        } else {
          linkList.classList.add('is-open');
          arrow.classList.add('is-open'); // 矢印を回転させる
        }
      });
    });
  });
};
menu();