        const area = document.getElementById('canvas-area');

        area.addEventListener('click', (e) => {
            const goutte = document.createElement('div');
            goutte.className = 'goutte';

            const x = e.clientX - area.offsetLeft;
            const y = e.clientY - area.offsetTop;
            
            goutte.style.left = x + 'px';
            goutte.style.top = y + 'px';

            area.appendChild(goutte);

            setTimeout(() => goutte.remove(), 1000);
        });