$(document).ready(function() {
    var itemDatabase = [
        {
            name: "Item Name 1",
            property: "Properties 1",
            description: "Description 1",
        },
        {
            name: "Item Name 2",
            property: "Properties 2",
            description: "Description 2",
        },
        {
            name: "Item Name 3",
            property: "Properties 3",
            description: "Description 3",
        },
        {
            name: "Item Name 4",
            property: "Properties 4",
            description: "Description 4",
        },
        {
            name: "Item Name 5",
            property: "Properties 5",
            description: "Description 5",
        },
        {
            name: "Item Name 6",
            property: "Properties 6",
            description: "Description 6",
        },
        {
            name: "Item Name 7",
            property: "Properties 7",
            description: "Description 7",
        },
        {
            name: "Item Name 8",
            property: "Properties 8",
            description: "Description 8",
        },
        {
            name: "Item Name 9",
            property: "Properties 9",
            description: "Description 9",
        },
        {
            name: "Item Name 10",
            property: "Properties 10",
            description: "Description 10",
        },
    ];

    var databaseSize = itemDatabase.length;

    $('#runGen').click(function() {

        var chosenItem = [Math.floor(Math.random() * databaseSize)];

        $('#itemCard p.name').replaceWith('<p class="name">' + itemDatabase[chosenItem].name + '</p>');

        $('#itemCard p.property').replaceWith('<p class="property">' + itemDatabase[chosenItem].property + '</p>');

        $('#itemCard p.description').replaceWith('<p class="description">' + itemDatabase[chosenItem].description + '</p>');

    });

});