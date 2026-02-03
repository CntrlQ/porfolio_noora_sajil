// Contact page specific functionality
function sendMessage(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate message sending
    const sendBtn = form.querySelector('.send-btn');
    const originalText = sendBtn.textContent;

    // Show loading state
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    sendBtn.style.background = '#6c757d';

    // Simulate API call
    setTimeout(() => {
        // Show success message
        sendBtn.textContent = 'Message Sent! ✓';
        sendBtn.style.background = '#28a745';

        // Create success terminal output
        const successOutput = document.createElement('div');
        successOutput.className = 'prompt-line';
        successOutput.innerHTML = `
            <span class="prompt">$ message-status</span>
        `;

        const successResult = document.createElement('div');
        successResult.className = 'output';
        successResult.innerHTML = `
            <p style="color: #28a745; margin: 10px 0;">
                ✓ Message successfully sent to Noora!<br>
                ✓ Response time: ~24 hours<br>
                ✓ Message ID: MSG-${Date.now()}
            </p>
        `;

        // Insert before current prompt
        const currentPrompt = document.querySelector('.prompt-line.current');
        currentPrompt.parentNode.insertBefore(successOutput, currentPrompt);
        currentPrompt.parentNode.insertBefore(successResult, currentPrompt);

        // Reset form
        form.reset();

        // Reset button after delay
        setTimeout(() => {
            sendBtn.textContent = originalText;
            sendBtn.disabled = false;
            sendBtn.style.background = '#28a745';
        }, 3000);

    }, 2000);
}

function downloadResume() {
    // Actual resume download
    const downloadBtn = event.target;
    const originalText = downloadBtn.textContent;

    // Show downloading state
    downloadBtn.textContent = '📄 Opening...';
    downloadBtn.style.background = '#6c757d';

    // Open the actual resume file
    window.open('./PC-noorasajil.pdf', '_blank');

    setTimeout(() => {
        // Create download terminal output
        const downloadOutput = document.createElement('div');
        downloadOutput.className = 'prompt-line';
        downloadOutput.innerHTML = `
            <span class="prompt">$ download-status</span>
        `;

        const downloadResult = document.createElement('div');
        downloadResult.className = 'output';
        downloadResult.innerHTML = `
            <p style="color: #28a745; margin: 10px 0;">
                ✓ Resume opened successfully!<br>
                ✓ File: PC-noorasajil.pdf<br>
                ✓ Opening in new tab...
            </p>
        `;

        // Insert before current prompt
        const currentPrompt = document.querySelector('.prompt-line.current');
        if (currentPrompt) {
            currentPrompt.parentNode.insertBefore(downloadOutput, currentPrompt);
            currentPrompt.parentNode.insertBefore(downloadResult, currentPrompt);
        }

        // Reset button
        downloadBtn.textContent = originalText;
        downloadBtn.style.background = '#28a745';

    }, 1000);
}

// Add form validation feedback
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (form) {
        const inputs = form.querySelectorAll('.form-input, .form-textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                if (this.value.trim() === '' && this.hasAttribute('required')) {
                    this.style.borderColor = '#dc3545';
                } else if (this.type === 'email' && !isValidEmail(this.value)) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = 'rgba(88, 166, 255, 0.3)';
                }
            });

            input.addEventListener('input', function () {
                if (this.style.borderColor === 'rgb(220, 53, 69)') {
                    this.style.borderColor = 'rgba(88, 166, 255, 0.3)';
                }
            });
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add typing animation to contact form
function addTypingAnimation() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';

        setTimeout(() => {
            form.style.transition = 'all 0.6s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 500);
    }
}