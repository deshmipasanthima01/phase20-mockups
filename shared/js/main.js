const filter = document.querySelector('#area-filter');
const cards = [...document.querySelectorAll('.prototype-card[data-group]')];
const emptyState = document.querySelector('#empty-state');

if (filter && cards.length) {
  filter.addEventListener('change', () => {
    let visibleCount = 0;
    cards.forEach((card) => {
      const visible = filter.value === 'all' || card.dataset.group === filter.value;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
