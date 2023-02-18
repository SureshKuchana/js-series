const tabs = Array.from(document.querySelectorAll(".tab"));
const tabby = document.querySelector('.tabby')
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))


tabs.forEach(function(tab){
	tab.addEventListener("click", function(event){
		const target = tab.dataset.theme
		const tabContent = tabby.querySelector('#' + target)
		tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')
    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
	})
});

