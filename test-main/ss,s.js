







$(document).ready(function() {
    // AJAX-запрос для получения JSON-данных
    $.getJSON("data.json", function(jsonData) {
        // Функция сравнения для сортировки по нескольким полям
    
     
        // Создание HTML-таблицы
        function renderTable(data) {
        var table = $('#myTable  tbody ');
        table.empty();
        var headerRow = $('<tr>').append();
        table.append(headerRow);

        // Заполнение таблицы данными
        $.each(data, function(index, employee) {
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
      

        // Вставка таблицы в элемент с id="table-container"
        
     

    }

    /* intiling 
    -------*/
    renderTable(jsonData);

    /*-------------------
    ------------------------- Sort By Id */
    function sortById(data) {
        jsonData.sort(function(a, b) {
            return a.o_id - b.o_id;
        });

        renderTable(data);
    }

    /*-------------------
    ------------------------- Sort By Name */
    function sortByName(data) {
        jsonData.sort((a, b) => a.client_name.localeCompare(b.client_name))

        renderTable(data);
    }

  
    /*------------------------------------------
    --------------------------------sort Whe*/
    $('#sortButton').click(function() {
        sortById(jsonData);
       
    });

    $('#sortButton1').click(function() {
        sortByName(jsonData);
       
    });
   
    });
    
});
