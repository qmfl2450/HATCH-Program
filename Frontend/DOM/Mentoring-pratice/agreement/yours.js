const checkAll = document.getElementById("checkAll")
const termsOfService = document.getElementById("termsOfService")
const privacyPolicy = document.getElementById("privacyPolicy")
const allowPromotions = document.getElementById("allowPromotions")
const nextButton = document.querySelector('.next-button')

const All = [checkAll, termsOfService, privacyPolicy, allowPromotions];



checkAll.addEventListener('click', v => {
    if (!checkAll.checked) {
        All.forEach(v => v.checked = false)
    }

    if (checkAll.checked) {
        All.forEach(v => v.checked = true)
        nextButton.removeAttribute('disabled')
    }
})

All.forEach(e => {
    e.addEventListener('click', v => {
        if (!termsOfService.checked || !privacyPolicy.checked) {
            nextButton.disabled = true
        }

        if (termsOfService.checked && privacyPolicy.checked) {
            nextButton.disabled = false
        }

        if (checkAll.checked && !(termsOfService.checked) || !(privacyPolicy.checked) || !(allowPromotions.checked)) {
            checkAll.checked = false
        }
    })
});