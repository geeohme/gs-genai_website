document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[action="/api/signup"]')
  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const btn = form.querySelector('button')
      const emailInput = form.querySelector('input[name="email"]')
      const status = document.createElement('div')
      status.className = 'text-sm mt-2'
      form.appendChild(status)

      if (!emailInput || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
        status.textContent = 'Please enter a valid email.'
        status.classList.add('text-red-400')
        return
      }

      btn.disabled = true
      btn.textContent = 'Submitting…'

      try {
        const fd = new FormData(form)
        const res = await fetch('/api/signup', { method: 'POST', body: fd })
        const data = await res.json()
        if (data.ok) {
          status.textContent = 'Thanks! You\'re on the list.'
          status.classList.remove('text-red-400')
          status.classList.add('text-emerald-400')
          form.reset()
        } else {
          throw new Error(data.error || 'Something went wrong')
        }
      } catch (err) {
        status.textContent = err.message || 'Failed to submit. Please try again.'
        status.classList.add('text-red-400')
      } finally {
        btn.disabled = false
        btn.textContent = btn.dataset.originalText || 'Notify me'
      }
    })
  })
})
