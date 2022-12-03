const findBlockByAlias = (alias) => {
  return $('.reviews__item').filter((ndx, item) => {
    return $(item).attr('data-linked-width') == alias;
  });
};

$('.interactive-avatar__link').click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr('data-open');
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest('.interactive-avatar');

  itemToShow.addClass('reviews__item--active').siblings().removeClass('reviews__item--active');


  curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
});
