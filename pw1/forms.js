document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[role="status"]');
    status.textContent = form.dataset.demoForm === 'subscribe'
      ? 'Демонстрацію підписки завершено. Адресу не збережено, розсилку не оформлено.'
      : 'Форму заповнено коректно. Це демонстрація: повідомлення не надіслано.';
    form.reset();
  });
});
