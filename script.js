
const sub_section_button = document.querySelectorAll('.sub-section_button');
sub_section_button.forEach((button) => {
  button.addEventListener('click', () => {
    button.children[0].classList.toggle('active');
    button.children[0].classList.toggle('rotate');
    button.parentElement.nextElementSibling.classList.toggle('active');
  });
});
const side_menu_button = document.querySelector('#side_menu_button');
const side_menu = document.querySelector('#side_menu');
side_menu_button.addEventListener('click', () => {
  const header_contact = document.querySelector('.header_contact');
  header_contact.classList.add('active');
  const black_overlay = document.querySelector('#black_overlay');
  black_overlay.classList.toggle('active');
  side_menu.classList.toggle('active');
  document.body.classList.toggle('lock');
});

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let title = document.querySelector('.title');
  let header_contact = document.querySelector('.header_contact');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > title.getBoundingClientRect().bottom + 100) {
    console.log('over the title');
    if (scrollTop > lastScrollTop) {
      header_contact.classList.remove('active');
    } else {
      header_contact.classList.add('active');
    }
    lastScrollTop = scrollTop;
  }
});

const icons = ['fa-facebook', 'fa-skype', 'fa-instagram'];

let currentIndex = 0;
function changeIcon() {
  const icon = document.querySelector('#dynamic-icons');
  icon.style.opacity = 0;

  setTimeout(() => {
    icon.classList.remove(icons[currentIndex]);
    currentIndex = (currentIndex + 1) % icons.length;
    icon.classList.add(icons[currentIndex]);
    icon.style.opacity = 1;
  }, 500);
}
setInterval(changeIcon, 1000);

const contact_now_button = document.querySelector('#contact_now_button');
const contact_popup = document.querySelector('#contact_popup');
const black_overlay = document.querySelector('#black_overlay');
contact_now_button.addEventListener('click', () => {
  contact_popup.classList.toggle('active_block');
  black_overlay.classList.toggle('active');
});

const email_button = document.querySelector('#email_button');
const email_modal = document.querySelector('#email_modal');
const email_modal_close = document.querySelector('#email_modal_close');
email_button.addEventListener('click', () => {
  email_modal.classList.toggle('active_block');
});

email_modal_close.addEventListener('click', () => {
  email_modal.classList.toggle('active_block');
});

const contact_form = document.querySelector('#contact-form');
contact_form.addEventListener('submit', (e) => {
  e.preventDefault();
  contact_form.reset();
  console.log('Your message has been sent');
  const formData = new FormData(contact_form);
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  location.reload();
});

const img1 = document.getElementById('scroll_up_logo');
const change_logo_box = document.querySelector('#change_logo_box');
const img1_size = img1.getBoundingClientRect();
change_logo_box.style.height = img1_size.height + 'px';

let current_logo = 1;

window.addEventListener('wheel', function (event) {
  const img1 = document.getElementById('scroll_up_logo');
  const img2 = document.getElementById('scroll_down_logo');
  if (event.deltaY > 0 && current_logo === 1) {
    const change_logo_box = document.querySelector('#change_logo_box');
    img1.style.transform = 'translateY(-100%)';
    img2.style.transform = 'translateY(0)';
    current_logo = 2;
    const img2_size = img2.getBoundingClientRect();
    change_logo_box.style.height = img2_size.height + 'px';
    const site_title = document.querySelector('.site_title');
    site_title.style.transform = 'translateY(-200%)';
  } else if (event.deltaY < 0 && current_logo === 2) {
    img1.style.transform = 'translateY(0)';
    img2.style.transform = 'translateY(300%)';
    current_logo = 1;
    const img1_size = img1.getBoundingClientRect();
    const change_logo_box = document.querySelector('#change_logo_box');
    change_logo_box.style.height = img1_size.height + 'px';
    const site_title = document.querySelector('.site_title');
    site_title.style.transform = 'translateY(0)';
  }
});

const button_thiet_ke = document.querySelector('#button_thiet_ke');
const button_thi_cong = document.querySelector('#button_thi_cong');
const button_tap_chi = document.querySelector('#button_tap_chi');
const button_bao_gia = document.querySelector('#button_bao_gia');
const button_gioi_thieu = document.querySelector('#button_gioi_thieu');

const sub_menu_thiet_ke = document.querySelector('#sub_menu_for_thiet_ke');
const sub_menu_thi_cong = document.querySelector('#sub_menu_for_thi_cong');
const sub_menu_tap_chi = document.querySelector('#sub_menu_for_tap_chi');
const sub_menu_bao_gia = document.querySelector('#sub_menu_for_bao_gia');
const sub_menu_gioi_thieu = document.querySelector('#sub_menu_for_gioi_thieu');

button_thiet_ke.addEventListener('mouseover', () => {
  sub_menu_thiet_ke.style.display = 'flex';
  sub_menu_thi_cong.style.display = 'none';
  sub_menu_tap_chi.style.display = 'none';
  sub_menu_bao_gia.style.display = 'none';
  sub_menu_gioi_thieu.style.display = 'none';
});
sub_menu_thiet_ke.addEventListener('mouseover', () => {
  sub_menu_thiet_ke.style.display = 'flex';
});
sub_menu_thiet_ke.addEventListener('mouseout', () => {
  sub_menu_thiet_ke.style.display = 'none';
});

button_thi_cong.addEventListener('mouseover', () => {
  sub_menu_thi_cong.style.display = 'flex';
  sub_menu_thiet_ke.style.display = 'none';
  sub_menu_tap_chi.style.display = 'none';
  sub_menu_bao_gia.style.display = 'none';
  sub_menu_gioi_thieu.style.display = 'none';
});
sub_menu_thi_cong.addEventListener('mouseover', () => {
  sub_menu_thi_cong.style.display = 'flex';
});
sub_menu_thi_cong.addEventListener('mouseout', () => {
  sub_menu_thi_cong.style.display = 'none';
});

button_tap_chi.addEventListener('mouseover', () => {
  sub_menu_tap_chi.style.display = 'flex';
  sub_menu_thiet_ke.style.display = 'none';
  sub_menu_thi_cong.style.display = 'none';
  sub_menu_bao_gia.style.display = 'none';
  sub_menu_gioi_thieu.style.display = 'none';
});
sub_menu_tap_chi.addEventListener('mouseover', () => {
  sub_menu_tap_chi.style.display = 'flex';
});
sub_menu_tap_chi.addEventListener('mouseout', () => {
  sub_menu_tap_chi.style.display = 'none';
});

button_bao_gia.addEventListener('mouseover', () => {
  sub_menu_bao_gia.style.display = 'flex';
  sub_menu_thiet_ke.style.display = 'none';
  sub_menu_thi_cong.style.display = 'none';
  sub_menu_tap_chi.style.display = 'none';
  sub_menu_gioi_thieu.style.display = 'none';
});
sub_menu_bao_gia.addEventListener('mouseover', () => {
  sub_menu_bao_gia.style.display = 'flex';
});
sub_menu_bao_gia.addEventListener('mouseout', () => {
  sub_menu_bao_gia.style.display = 'none';
});

button_gioi_thieu.addEventListener('mouseover', () => {
  sub_menu_gioi_thieu.style.display = 'flex';
  sub_menu_thiet_ke.style.display = 'none';
  sub_menu_thi_cong.style.display = 'none';
  sub_menu_tap_chi.style.display = 'none';
  sub_menu_bao_gia.style.display = 'none';
});
sub_menu_gioi_thieu.addEventListener('mouseover', () => {
  sub_menu_gioi_thieu.style.display = 'flex';
});
sub_menu_gioi_thieu.addEventListener('mouseout', () => {
  sub_menu_gioi_thieu.style.display = 'none';
});
