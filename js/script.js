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
