function loadCompanies(pageNumber, totalPages) {
    $.ajax({
        type: "GET",
        url: "/api/" + pageNumber,
        success: function (companyList) {
            $("#container").empty();
            for (let companyRestDto of companyList) {
                $("#container").append(
                    "<div class=\"row align-items-center job-item border-bottom pb-3 mb-3 pt-3\">" +
                    "<div class=\"col-md-2\">" +
                    "<img align=\"center\" width=\"100\" height=\"100\" src=" + companyRestDto.imgUrl + " alt=\"Image\" class=\"img-fluid\">" +
                    "</div>" +
                    "<div class=\"col-md-7\">" +
                    "<h4><a href=\"/companies/" + companyRestDto.id + "\">" + companyRestDto.name + "</a></h4>" +
                    "<p class=\"meta\">Организатор: <strong>" + companyRestDto.ownerLogin + "</strong>" +
                    "</p>" +
                    "</div>" +
                    "<div class=\"col-md-3 text-md-right\">" +
                    "<span class=\"meta\">Окончание компании через</span>" +
                    "<h4>" + companyRestDto.daysLeft + " дн.</h4>" +
                    "</div>" +
                    "</div>"
                );
            }
            $("#pages").empty();
            for (let i = 1; i <= totalPages; i++) {
                $("#pages").append(
                    "<span class=\"ajaxLink" + ((i == pageNumber) ? " currentLink\"" : "\"") +
                    "onclick=\"loadCompanies('" + i + "', '" + totalPages + "');\">" +
                    i +
                    "</span>"
                );
            }
        }
    });
}