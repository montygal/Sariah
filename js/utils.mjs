headerTemplateFn()

const header = document.getElementById('header')
const footer = document.getElementById('footer')

renderWithTemplate(headerTemplateFn, header)
renderWithTemplate(footerTemplateFn, footer)