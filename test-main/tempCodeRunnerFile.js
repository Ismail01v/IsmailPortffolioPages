function compareByMultipleFields(a, b) {
        // Сначала сравниваем по id
        if (a.id !== b.id) {
            return a.id - b.id;
        }

        // Если id одинаковы, сравниваем по имени
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        }

        // Дополнительные условия для других полей могут быть добавлены

        return 0; // Если все поля равны
    }

    // Сортировка данных по нескольким полям
    jsonData.employees.sort(compareByMultipleFields);

    // Вывод отсортированных данных в консоль
    console.log("Sorted by multiple fields:", jsonData.employees);