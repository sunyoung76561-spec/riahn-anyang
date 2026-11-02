// 리안헤어 안양일번가점 - 공통 스크립트

// 모바일 햄버거 메뉴
(function(){
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('mobileNav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? btn.dataset.close : btn.dataset.open);
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-label', btn.dataset.open);
    });
  });
})();

// 히어로 배경 영상: 화면에 보일 때만 재생 (모바일 데이터 절약)
(function(){
  var video = document.getElementById('heroVideo');
  if(!video) return;
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          video.play().catch(function(){});
        }else{
          video.pause();
        }
      });
    }, {threshold: 0.15});
    io.observe(video);
  }else{
    video.play().catch(function(){});
  }
})();

// 내 컴퓨터에서 더블클릭해 미리 볼 때만 폴더 주소에 index.html 을 붙인다 (공개된 홈페이지에는 영향 없음)
(function(){
  if(location.protocol !== 'file:') return;
  document.querySelectorAll('a[href]').forEach(function(a){
    var h = a.getAttribute('href');
    if(!/^[a-z]+:/i.test(h) && /\/$/.test(h)) a.setAttribute('href', h + 'index.html');
  });
})();
