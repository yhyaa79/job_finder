document.addEventListener('DOMContentLoaded', () => {

    const sections = [{
            btn: '.btn-add[data-target="team"]',
            container: '#team-items',
            template: '#team-template'
        },
        {
            btn: '.btn-add[data-target="funding"]',
            container: '#funding-items',
            template: '#funding-template'
        },
        {
            btn: '.btn-add[data-target="equipment"]',
            container: '#equipment-items',
            template: '#equipment-template'
        }
    ];

    sections.forEach(sec => {
        document.querySelector(sec.btn).addEventListener('click', () => {
            const template = document.querySelector(sec.template);
            const clone = template.content.cloneNode(true);

            // دکمه حذف
            clone.querySelector('.btn-remove').addEventListener('click', (e) => {
                e.target.closest('.added-item').remove();
            });

            document.querySelector(sec.container).appendChild(clone);
        });
    });

});



document.addEventListener('DOMContentLoaded', () => {
    const checks = document.querySelectorAll('.lang-check');
    const display = document.getElementById('selected-text');
    const toggle = document.getElementById('toggle-languages');

    function updateDisplay() {
      const selected = Array.from(checks)
        .filter(ch => ch.checked)
        .map(ch => ch.nextElementSibling.textContent.trim().split(' (')[0]);

      if (selected.length === 0) {
        display.textContent = 'زبان‌ها را انتخاب کنید';
      } else if (selected.length <= 3) {
        display.textContent = selected.join('، ') + ' انتخاب شد';
      } else {
        display.textContent = selected.length + ' زبان انتخاب شد';
      }
    }

    // به‌روزرسانی هنگام تغییر هر چک‌باکس
    checks.forEach(ch => ch.addEventListener('change', updateDisplay));

    // بستن منو با کلیک بیرون
    document.addEventListener('click', e => {
      if (!e.target.closest('.multi-select-wrapper')) {
        toggle.checked = false;
      }
    });

    // جلوگیری از بسته شدن وقتی داخل منو کلیک می‌کنیم
    document.querySelector('.multi-select-wrapper').addEventListener('click', e => {
      e.stopPropagation();
    });
  });