// nav 토글 기능
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("nav");
  const mediaQuery = window.matchMedia("(max-width: 568px)");

  function handleResize(e) {
    if (!e.matches) {
      nav.classList.remove("open"); // 화면 크기가 569px 이상일 때 .open 클래스 제거
      nav.style.display = "block"; // 화면 크기가 569px 이상일 때 nav 표시
    } else {
      if (!nav.classList.contains("open")) {
        nav.style.display = "none"; // 화면 크기가 568px 이하일 때 .open 클래스가 없으면 숨김
      }
    }
  }

  navToggle.addEventListener("click", function() {
    if (mediaQuery.matches) {
      nav.classList.toggle("open");
      if (nav.classList.contains("open")) {
        nav.style.display = "block"; // .open 클래스가 추가되면 표시
      } else {
        nav.style.display = "none"; // .open 클래스가 제거되면 숨김
      }
    }
  });

  mediaQuery.addListener(handleResize);
  handleResize(mediaQuery);
});

// article 확장 축소 기능
document.addEventListener("DOMContentLoaded", function() {
  const expandButtons = document.querySelectorAll('.expand-btn');

  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const article = this.closest('article'); // 현재 버튼에 가장 가까운 article 요소를 찾음
      const content = article.querySelector('.content'); // article 내부에서 .content 클래스를 가진 요소를 찾음
      if (content) { // content가 null이 아닌 경우에만 실행
        const allContents = document.querySelectorAll('.content');

        allContents.forEach(item => {
          if (item !== content) {
            item.classList.add('hidden');
            const prevButton = item.previousElementSibling.querySelector('.expand-btn');
            if (prevButton) { // prevButton이 null이 아닌 경우에만 실행
              prevButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>';
            }
          }
        });

        content.classList.toggle('hidden');
        this.innerHTML = content.classList.contains('hidden')
          ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m8-8v16" /></svg>';
      }
    });
  });
});

