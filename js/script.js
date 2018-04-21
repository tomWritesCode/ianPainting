document.getElementById("openClose").addEventListener("click", function() {
	// OPEN MENU
	if (
		document
			.getElementById("menu")
			.classList.contains("menu" && "slideMenuOpen")
	) {
		document.getElementById("menu").classList.add("menuMobileOpen");
		document.getElementById("x").classList.add("xClose");
		document.getElementById("x").classList.remove("xOpen");
		document.getElementById("y").classList.add("yClose");
		document.getElementById("y").classList.remove("yOpen");
		document.getElementById("menu").classList.remove("slideMenuOpen");
	} else {
		document.getElementById("menu").classList.remove("menuMobileOpen");
		document.getElementById("x").classList.remove("xClose");
		document.getElementById("x").classList.add("xOpen");
		document.getElementById("y").classList.remove("yClose");
		document.getElementById("y").classList.add("yOpen");
		document.getElementById("menu").classList.add("slideMenuOpen");
	}
});
