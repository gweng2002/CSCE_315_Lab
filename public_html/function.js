function load_style() {
	page_style = localStorage.getItem("page_stylesheet_name");
	if(page_style === null) {
		page_style = "style1.css";
	}
	document.getElementById('page_style').setAttribute("href", page_style);

}

function style1()
{
    localStorage.setItem("page_stylesheet_name", "style1.css");
	load_style();
}

function style2()
{
    localStorage.setItem("page_stylesheet_name", "style2.css");
	load_style();
}

load_style();