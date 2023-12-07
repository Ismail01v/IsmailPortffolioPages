$(document).ready(function() {
    var sortStateColumn = "o_id"; // Default sorting column
    var ascending = true;

    function fetchData() {
        $.getJSON("data.json", function(jsonData) {
            // Replace 'your_json_data_endpoint' with the actual URL or path to your JSON data
            if (sortStateColumn) {
                jsonData.sort(function(a, b) {
                    // Compare based on the current sorting column
                    var compareResult = a[sortStateColumn] - b[sortStateColumn] ||
                        a[sortStateColumn].localeCompare(b[sortStateColumn]);
                    return ascending ? compareResult : -compareResult;
                });
            }

            // Display the sorted data
            displayData(jsonData);

            // Alert after data is loaded and table is updated
            alert("Sorting table by " + (sortStateColumn || "original order"));
        });
    }

    // Display data in the table
    function displayData(jsonData) {
        var table = $("#myTable tbody");
        table.empty();
        $.each(jsonData, function(index, employee) {
            var row = $('<tr>').append(
                '<td>' + employee.o_id + '</td>',
                '<td>' + employee.client_name + '</td>',
                '<td>' + employee.diets + '</td>',
                '<td>' + employee.tariff + '</td>',
                '<td>' + employee.address + '</td>',
                '<td>' + employee.phone + '</td>',
                '<td>' + employee.dates + '</td>',
                '<td>' + employee.start_date + '</td>',
                '<td>' + employee.end_date + '</td>',
                '<td>' + employee.discount + '</td>',
                '<td>' + employee.order_sum + '</td>',
                '<td>' + employee.order_payed + '</td>',
                '<td>' + employee.pay_status + '</td>',
                '<td>' + employee.discount + '</td>',
                '<td>' + employee.inner_comment + '</td>'
            );

            table.append(row);
        });
    }

    // Click event for sorting by "o_id"
    $("#myTable th[data-sort='o_id']").on("click", function() {
        // Toggle sort order
        ascending = !ascending;

        // Toggle between sorting by "o_id" and no sorting
        if (sortStateColumn === "o_id") {
            sortStateColumn = null;
        } else {
            sortStateColumn = "o_id";
        }

        fetchData();
    });

    // Click event for sorting by "client_name"
    $("#myTable th[data-sort='client_name']").on("click", function() {
        // Toggle sort order
        ascending = !ascending;

        // Toggle between sorting by "client_name" and no sorting
        if (sortStateColumn === "client_name") {
            sortStateColumn = null;
        } else {
            sortStateColumn = "client_name";
        }

        fetchData(); 
    });
    fetchData(); // Initial data load
});