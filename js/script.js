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
  // پیدا کردن همه multi-select wrapperها
  const wrappers = document.querySelectorAll('.multi-select-wrapper');

  wrappers.forEach(wrapper => {
    const toggle = wrapper.querySelector('.toggle-input');
    const display = wrapper.querySelector('span[id^="selected-"]'); // همه spanهایی که id با selected- شروع می‌شوند
    const checks = wrapper.querySelectorAll('input[type="checkbox"]:not(.toggle-input)');

    if (!toggle || !display || checks.length === 0) return;

    function updateDisplay() {
      const selected = Array.from(checks)
        .filter(ch => ch.checked)
        .map(ch => {
          const label = ch.nextElementSibling?.textContent?.trim() || '';
          // فقط متن فارسی را نگه می‌داریم (قبل از پرانتز)
          return label.split(' (')[0] || label;
        })
        .filter(Boolean);

      if (selected.length === 0) {
        display.textContent = 'انتخاب کنید';
      } else if (selected.length <= 3) {
        display.textContent = selected.join('، ') + ' انتخاب شد';
      } else {
        display.textContent = `${selected.length} گزینه انتخاب شد`;
      }
    }

    // به‌روزرسانی هنگام تیک زدن / برداشتن
    checks.forEach(ch => {
      ch.addEventListener('change', updateDisplay);
    });

    // اولیه کردن وضعیت
    updateDisplay();
  });

  // بستن همه منوها وقتی بیرون کلیک شد
  document.addEventListener('click', e => {
    if (!e.target.closest('.multi-select-wrapper')) {
      document.querySelectorAll('.toggle-input:checked').forEach(toggle => {
        toggle.checked = false;
      });
    }
  });

  // جلوگیری از بسته شدن وقتی داخل wrapper کلیک می‌کنیم
  document.querySelectorAll('.multi-select-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
});