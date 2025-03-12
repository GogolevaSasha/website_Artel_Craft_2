// Функция для переключения видимости бокового меню и оверлея
function toggleMenu() {
    // Открыть или закрыть боковое меню
    document.getElementById('sidebar').classList.toggle('open');
    // Показать или скрыть оверлей
    document.getElementById('overlay').classList.toggle('active');
}
