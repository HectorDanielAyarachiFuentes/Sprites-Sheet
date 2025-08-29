        // El JavaScript no necesita cambios.
        document.addEventListener('DOMContentLoaded', () => {
            const controlButtons = document.querySelectorAll('.controls .btn');
            document.querySelectorAll('.animacion-individual').forEach(container => {
                const animType = container.dataset.animContainer;
                updateButtonState(animType, true);
            });
            
            controlButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const action = button.dataset.action;
                    const target = button.dataset.target;
                    const animElement = document.querySelector(`.perrito-anim.${target}`);
                    
                    if (action === 'play') {
                        animElement.style.animationPlayState = 'running';
                        updateButtonState(target, true);
                    } else if (action === 'pause') {
                        animElement.style.animationPlayState = 'paused';
                        updateButtonState(target, false);
                    }
                });
            });

            function updateButtonState(animType, isPlaying) {
                const playBtn = document.querySelector(`.btn[data-action="play"][data-target="${animType}"]`);
                const pauseBtn = document.querySelector(`.btn[data-action="pause"][data-target="${animType}"]`);
                playBtn.disabled = isPlaying;
                pauseBtn.disabled = !isPlaying;
            }
        });
