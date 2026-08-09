(function () {
  // ============================================================
  //  EMAILJS CONFIGURATION
  // ============================================================
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_3wo28zq',
    TEMPLATE_ID: 'template_9i3qgbq',
    PUBLIC_KEY: 'S6SdSwrWnRACWx662'
  };

  // ===== INITIALIZE EMAILJS =====
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

  // ============================================================
  //  PROJECTS DATA
  // ============================================================
  const projectsData = [{
    id: 1,
    title: "PakClassified - Car Marketplace Platform",
    desc: "A full-featured classified marketplace platform where users can buy and sell cars online. Users can create accounts, post car listings with images and details, search for vehicles using advanced filters, and manage their listings. Features include user authentication with login, signup, forgot password functionality, protected routes, real-time search, category filters, price range filtering, and responsive UI for seamless experience across all devices.",
    cover: "./img/S1.png",
    images: [
      "./img/S1.png",
      "./img/S2.png",
      "./img/S3.png",
      "./img/S4.png",
      "./img/S5.png"
    ],
    tag: "Full-Stack App",
    tech: "React, Node, Express, MongoDB, JWT, Bcrypt",
    demo: "https://auth-demo.vercel.app"
  }, {
    id: 2,
    title: "BrandStore - E-Commerce Platform",
    desc: "A complete e-commerce store platform where admin can manage products through an admin dashboard, add new products with images and details, update inventory, and process orders. Customers can browse products by categories including Baby Girls, Baby Boys, Women, Men, and Accessories. Features include shopping cart functionality, add to cart, quantity management, category-based filtering, product search, user authentication, order placement, and admin panel for complete store management.",
    cover: "./img/C1.png",
    images: [
      "./img/C1.png",
      "./img/C2.png",
      "./img/C3.png",
      "./img/C4.png",
      "./img/C5.png",
      "./img/C6.png",
      "./img/C7.png"
    ],
    tag: "E-Commerce Store",
    tech: "React, Node.js, Express, MongoDB, JWT, Stripe, Bootstrap",
    demo: "https://api-demo.vercel.app"
  }, {
    id: 3,
    title: "Tasker - Task Management Application",
    desc: "Tasker is a comprehensive task management application where users can efficiently manage their daily tasks. Users can add new tasks with titles, descriptions, categories, and due dates, update existing tasks, delete completed or unnecessary tasks, and filter tasks by categories for better organization. The application features image upload functionality using Multer for task attachments, fully responsive design for all screen sizes, and an intuitive user interface. This was my first project, showcasing fundamental CRUD operations with a clean and user-friendly experience.",
    cover: "./img/T1.png",
    images: [
      "./img/T1.png",
      "./img/T2.png",
      "./img/T3.png",
      "./img/T4.png",
      "./img/T5.png"
    ],
    tag: "Task Management App",
    tech: "React, Node.js, Express, MongoDB, Multer, Bootstrap",
    demo: "https://dashboard-demo.vercel.app"
  }];

  // ============================================================
  //  CERTIFICATIONS DATA - NO IMAGES
  // ============================================================
  const certData = [{
    title: "Full Stack Web Development",
    org: "EVS Institute — 2024",
    desc: "Professional training covering frontend and backend development with MERN stack. Completed with distinction."
  }, {
    title: "MERN Stack Web Developer",
    org: "EVS Institute — 2024",
    desc: "Specialized training in React.js, Node.js, Express.js, and MongoDB. Built multiple real-world projects."
  }, {
    title: "Frontend Web Development",
    org: "EVS Institute — 2024",
    desc: "HTML, CSS, JavaScript, and responsive design principles. Created modern, mobile-first web interfaces."
  }];
  // ============================================================
  //  RENDER PROJECTS
  // ============================================================
  const projectsGrid = document.getElementById('projectsGrid');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.tag === filter);
    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="card-img-wrapper" data-id="${item.id}">
          <img src="${item.cover}" alt="${item.title}" loading="lazy" />
          <div class="view-badge"><i class="fa-regular fa-eye"></i> View in Detail</div>
        </div>
        <div class="card-top">
          <span class="project-tag"><i class="fa-solid fa-briefcase"></i> ${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span style="color:var(--muted);font-size:0.8rem;margin-top:0.3rem;"><i class="fa-solid fa-code"></i> ${item.tech}</span>
        </div>
        <div class="project-links">
          <a href="#" onclick="event.preventDefault(); openModal(${JSON.stringify(item).replace(/"/g, '&quot;')}); return false;">View Details</a>
        </div>
      `;
      projectsGrid.appendChild(card);
      const imgWrap = card.querySelector('.card-img-wrapper');
      imgWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(item);
      });
    });
  }

  // ===== FILTER =====
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter);
    });
  });

  // ============================================================
  //  RENDER CERTIFICATIONS
  // ============================================================
  const certGrid = document.getElementById('certGrid');
  if (certGrid) {
    certData.forEach(cert => {
      const card = document.createElement('article');
      card.className = 'certificate-card';
      card.style.cssText = 'padding: 0;'; // Remove padding from card
      card.innerHTML = `
      <div class="card-top" style="padding:1.8rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.8rem;">
          <span class="certificate-badge" style="display:inline-flex; padding:0.3rem 0.8rem; border-radius:999px; background:rgba(79,159,255,0.12); color:var(--accent); font-size:0.75rem; gap:0.4rem;">
            <i class="fa-solid fa-certificate"></i> Certificate
          </span>
        </div>
        <strong style="font-size:1.2rem; display:block; margin-bottom:0.3rem; color:var(--text);">${cert.title}</strong>
        <span style="color:var(--muted); font-size:0.9rem; display:block; margin-bottom:0.5rem;">
          <i class="fa-regular fa-calendar"></i> ${cert.org}
        </span>
        <p style="color:var(--muted); line-height:1.7; font-size:0.9rem; margin-top:0.3rem;">${cert.desc}</p>
      </div>
    `;
      certGrid.appendChild(card);
    });
  }

  // ============================================================
  //  MODAL
  // ============================================================
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalGrid = document.getElementById('modalGrid');

  window.openModal = function (item) {
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc + ' | Tech: ' + (item.tech || 'MERN Stack');
    modalGrid.innerHTML = '';
    const imgs = item.images || [item.cover];
    imgs.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = item.title;
      img.loading = 'lazy';
      modalGrid.appendChild(img);
    });
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ============================================================
  //  TOAST
  // ============================================================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  window.showToast = function (msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  };

  // ============================================================
  //  RESUME DOWNLOAD
  // ============================================================
  function downloadResume(format = 'png') {
    const el = document.getElementById('resumePreview');
    showToast('Generating resume...');
    if (format === 'pdf') {
      const { jsPDF } = window.jspdf;
      html2canvas(el, { scale: 2, backgroundColor: '#0b0e14', width: 800, useCORS: true, logging: false })
        .then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('Hamza_Malik_Resume.pdf');
          showToast('Resume downloaded as PDF!');
        })
        .catch(() => showToast('Error generating PDF.'));
    } else {
      html2canvas(el, { scale: 2, backgroundColor: '#0b0e14', width: 800, useCORS: true, logging: false })
        .then(canvas => {
          const link = document.createElement('a');
          link.download = 'Hamza_Malik_Resume.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          showToast('Resume downloaded as PNG!');
        })
        .catch(() => showToast('Error generating image.'));
    }
  }

  document.querySelectorAll('#resumeNavBtn, #resumeHeroBtn, #resumeAboutBtn').forEach(btn => btn.addEventListener('click', () => downloadResume('png')));
  document.querySelectorAll('#resumeNavBtn, #resumeHeroBtn, #resumeAboutBtn').forEach(btn => {
    btn.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      downloadResume('pdf');
    });
    btn.title = 'Click for PNG, Right-click for PDF';
  });

  // ============================================================
  //  MOBILE MENU
  // ============================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      menuToggle.innerHTML = mobileMenu.classList.contains('show') ? '<i class="fa-solid fa-xmark"></i>' :
        '<i class="fa-solid fa-bars"></i>';
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }));
  }

  // ============================================================
  //  WELCOME NOTIFICATION
  // ============================================================
  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcome-notification';
  welcomeDiv.innerHTML = `<i class="fa-regular fa-hand-peace"></i> Welcome to Hamza Malik's Portfolio — Let's build something great!`;
  document.body.appendChild(welcomeDiv);
  requestAnimationFrame(() => { welcomeDiv.classList.add('show'); });
  setTimeout(() => {
    welcomeDiv.classList.remove('show');
    welcomeDiv.classList.add('hide');
  }, 2500);

  // ============================================================
  //  BACK TO TOP
  // ============================================================
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================================
  //  COUNTERS
  // ============================================================
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('expCount').textContent = '1 year';
        document.getElementById('projectCount').textContent = '3';
        document.getElementById('certCount').textContent = '3';
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.querySelector('.hero');
  if (heroSection) heroObserver.observe(heroSection);

  // ============================================================
  //  SKILL PROGRESS BARS
  // ============================================================
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
          const width = bar.dataset.width || 0;
          setTimeout(() => { bar.style.width = width + '%'; }, 300);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

  // ============================================================
  //  CUSTOM CURSOR
  // ============================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX - 4 + 'px';
    cursorDot.style.top = e.clientY - 4 + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .card-img-wrapper, .project-card, .certificate-card, .hire-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });

  // ============================================================
  //  3D LAPTOP SCENE - COMPLETE FIX
  // ============================================================
  (function initLaptopScene() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    };
    setCanvasSize();

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.2, 6);
    camera.lookAt(0, 0, 0);

    // LIGHTS
    const ambient = new THREE.AmbientLight(0x404060);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.4);
    fillLight.position.set(-3, 1, -3);
    scene.add(fillLight);

    // MAIN GROUP
    const group = new THREE.Group();
    scene.add(group);

    // LAPTOP BODY
    const bodyGeo = new THREE.BoxGeometry(2.4, 0.15, 1.6);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1f2a, roughness: 0.3, metalness: 0.7 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = -0.1;
    group.add(body);

    // SCREEN
    const screenGeo = new THREE.BoxGeometry(2.2, 1.5, 0.06);
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x0a0e14, emissive: 0x1a3a6a, emissiveIntensity: 0.4 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.8, -0.03);
    group.add(screen);

    // SCREEN BORDER
    const borderGeo = new THREE.BoxGeometry(2.28, 1.58, 0.02);
    const borderMat = new THREE.MeshStandardMaterial({ color: 0x2a5a8a, emissive: 0x2a5a8a, emissiveIntensity: 0.2 });
    const border = new THREE.Mesh(borderGeo, borderMat);
    border.position.set(0, 0.8, -0.02);
    group.add(border);

    // KEYBOARD
    const kbGeo = new THREE.BoxGeometry(1.8, 0.04, 0.9);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x11151e, roughness: 0.8 });
    const kb = new THREE.Mesh(kbGeo, kbMat);
    kb.position.set(0, 0.02, 0.2);
    group.add(kb);

    // TRACKPAD
    const tpGeo = new THREE.BoxGeometry(0.6, 0.02, 0.5);
    const tpMat = new THREE.MeshStandardMaterial({ color: 0x222a38, roughness: 0.6, metalness: 0.3 });
    const tp = new THREE.Mesh(tpGeo, tpMat);
    tp.position.set(0, 0.03, -0.35);
    group.add(tp);

    // SCREEN LINES
    const linesMat = new THREE.MeshStandardMaterial({ color: 0x4f9fff, emissive: 0x4f9fff, emissiveIntensity: 0.15 });
    for (let i = 0; i < 8; i++) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(1.6 - i * 0.1, 0.02, 0.01), linesMat);
      line.position.set(0, 0.6 - i * 0.12, -0.02);
      group.add(line);
    }

    // FLOATING LOGOS
    const logoGroup = new THREE.Group();
    group.add(logoGroup);
    const radius = 2.4;
    const logos = [
      { color: 0x61dafb, label: 'React' },
      { color: 0x68a063, label: 'Node' },
      { color: 0x000000, label: 'Express' },
      { color: 0x47a248, label: 'MongoDB' },
      { color: 0xf05032, label: 'Git' },
      { color: 0xffffff, label: 'GitHub' }
    ];
    logos.forEach((logo, idx) => {
      const angle = (idx / logos.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 16, 16),
        new THREE.MeshStandardMaterial({ color: logo.color, emissive: logo.color, emissiveIntensity: 0.3 })
      );
      sphere.position.set(x, 0.2 + Math.sin(angle * 2) * 0.1, z);
      sphere.userData = { angle: angle, radius: radius, baseY: 0.2 };
      logoGroup.add(sphere);
    });

    // STARS
    const starsGeo = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPos = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      const r = 10 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      starsPos[i] = r * Math.sin(phi) * Math.cos(theta);
      starsPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      starsPos[i + 2] = r * Math.cos(phi);
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0x8899bb, size: 0.12, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    });

    resize();

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y = elapsed * 0.2;
      group.rotation.x = Math.sin(elapsed * 0.08) * 0.04;
      group.rotation.z = Math.cos(elapsed * 0.06) * 0.02;

      logoGroup.children.forEach((child, i) => {
        const angle = child.userData.angle + elapsed * 0.15;
        const radius = child.userData.radius;
        child.position.x = Math.cos(angle) * radius;
        child.position.z = Math.sin(angle) * radius;
        child.position.y = child.userData.baseY + Math.sin(elapsed * 0.8 + i) * 0.2;
      });

      screenMat.emissiveIntensity = 0.4 + Math.sin(elapsed * 0.5) * 0.1;
      stars.rotation.y = elapsed * 0.005;

      renderer.render(scene, camera);
    };
    animate();
  })();

  // ============================================================
  //  TYPED
  // ============================================================
  const typedEl = document.getElementById('typedRoles');
  if (typedEl) {
    new Typed('#typedRoles', {
      strings: ['MERN Stack Developer', 'React.js Developer', 'Node.js Developer', 'Full Stack Developer'],
      typeSpeed: 70,
      backSpeed: 36,
      backDelay: 1700,
      smartBackspace: true,
      loop: true,
      cursorChar: '|'
    });
  }

  // ============================================================
  //  GSAP
  // ============================================================
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.animate__animated').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ============================================================
  //  CONTACT FORM
  // ============================================================
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const subject = document.getElementById('subject')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      if (!name || !email || !subject || !message) {
        showToast('⚠️ Please fill all fields.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('⚠️ Please enter a valid email address.');
        return;
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      const templateParams = { name, email, subject, message };

      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )
        .then(function () {
          showToast('✅ Message sent successfully! I\'ll get back to you within 24 hours.');
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
        })
        .catch(function () {
          showToast('❌ Failed to send message. Please try again.');
        })
        .finally(function () {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // ============================================================
  //  NAV ACTIVE
  // ============================================================
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ============================================================
  //  INIT
  // ============================================================
  renderProjects('all');
})();