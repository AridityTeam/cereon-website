$("document").ready(() => {
    const currentPath = window.location.pathname
        .replace(/\/index\.html$/, "") // treat index.html as /
        .replace(/\/$/, "");           // remove trailing slash

    $("nav a").each(function() {
        const linkPath = new URL(this.href).pathname
            .replace(/\/index\.html$/, "")
            .replace(/\/$/, "");

        if (currentPath === linkPath || (currentPath === "" && linkPath.endsWith("/"))) {
            $(this)
                .addClass("bg-blue-500 hover:bg-blue-600 text-white")
                .attr("aria-current", "page");
        } else {
            $(this)
                .removeClass("bg-blue-500 hover:bg-blue-600 text-white")
                .removeAttr("aria-current");
        }
    });
});
