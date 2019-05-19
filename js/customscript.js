function link_list_active(naviclas, activeName, deactiveName, linkslah, cssStyle) {
	$(function(){
		var url = window.location.pathname, 
		urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
		// now grab every link from the navigation
		$(naviclas).each(function(){
			// and test its normalized href against the url pathname regexp
			if(window.location.pathname != "/") {
				if(urlRegExp.test(this.href.replace(/\/$/,''))){
					$(this).addClass(activeName);
				} else {
					$(this).addClass(deactiveName);
				}                
			}
			if(window.location.pathname == "/") {
				var homepath = document.querySelector(linkslah);
				homepath.style.cssText = cssStyle; 
			}
			//alert(window.location.pathname);
		});
	});
}
link_list_active(".mainmenu a, .footermenulists a", 'menuActive',"menudeactive", ".mainmenu a", "color: #dc2525;font-weight: 600");