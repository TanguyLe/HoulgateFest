import * as constants from "./constants";

export const villaLesGenets = {
    floors: [
        {
            name: "Rdc",
            size: { width: 13.14, height: 10.41 },
            gridTemplate: { rows: "19% 20% 18% 43%", columns: "12% 18.5% 6% 30% 33.5%" },
            rooms: [
                {
                    name: "Entrée",
                    type: constants.PASSING_TYPE,
                    gridPosition: { rows: { start: 3, end: 4 }, columns: { start: 2, end: 4 } },
                    seats: 0,
                },
                {
                    name: "W.C1",
                    type: constants.RESTROOMS_TYPE,
                    gridPosition: { rows: { start: 2, end: 3 }, columns: { start: 3, end: 4 } },
                    seats: 0,
                },
                {
                    name: "Escaliers1",
                    type: constants.STAIRS_TYPE,
                    gridPosition: { rows: { start: 2, end: 3 }, columns: { start: 2, end: 3 } },
                    seats: 0,
                },
                {
                    name: "Cuisine",
                    type: constants.KITCHEN_TYPE,
                    gridPosition: { rows: { start: 2, end: 4 }, columns: { start: 4, end: 6 } },
                    seats: 0,
                },
                {
                    name: "Salle de Bain1",
                    type: constants.BATHROOM_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 4, end: 5 } },
                    seats: 0,
                },
                {
                    name: "Petit Salon",
                    type: constants.LIVING_ROOM_TYPE,
                    gridPosition: { rows: { start: 4, end: 5 }, columns: { start: 5, end: 6 } },
                    seats: 4,
                },
                {
                    name: "Salle à Manger",
                    type: constants.LIVING_ROOM_TYPE,
                    gridPosition: { rows: { start: 4, end: 5 }, columns: { start: 1, end: 5 } },
                    seats: 4,
                },
            ],
        },
        {
            name: "Premier Etage",
            size: { width: 13.39, height: 9.26 },
            gridTemplate: {
                rows: "23.5% 16.5% 44% 16%",
                columns: "10.5% 7.7% 6.7% 10.5% 26.30% 9.1% 29.2%",
            },
            rooms: [
                {
                    name: "Escalier2",
                    type: constants.PASSING_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 2, end: 4 } },
                    seats: 0,
                },
                {
                    name: "W.C2",
                    type: constants.RESTROOMS_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 4, end: 5 } },
                    seats: 0,
                },
                {
                    name: "Salle de Bain2",
                    type: constants.BATHROOM_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 5, end: 6 } },
                    seats: 0,
                },
                {
                    name: "Escalier3",
                    type: constants.STAIRS_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 6, end: 7 } },
                    seats: 0,
                },
                {
                    name: "Placard",
                    type: constants.PASSING_TYPE,
                    gridPosition: { rows: { start: 2, end: 3 }, columns: { start: 2, end: 3 } },
                    seats: 0,
                },
                {
                    name: "Couloir1",
                    type: constants.PASSING_TYPE,
                    gridPosition: { rows: { start: 2, end: 3 }, columns: { start: 3, end: 7 } },
                    seats: 0,
                },
                {
                    name: "Chambre des Filles",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 1, end: 3 }, columns: { start: 7, end: 8 } },
                    seats: 3,
                },
                {
                    name: "Chambre de Mita",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 3, end: 4 }, columns: { start: 1, end: 4 } },
                    seats: 3,
                },
                {
                    name: "Chambre Verte",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 3, end: 4 }, columns: { start: 4, end: 6 } },
                    seats: 4,
                },
                {
                    name: "Chambre de Nanny",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 3, end: 5 }, columns: { start: 6, end: 8 } },
                    seats: 4,
                },
            ],
        },
        {
            name: "Deuxième Etage",
            size: { width: 4.31, height: 9.25 },
            gridTemplate: { rows: "23.5% 10.5% 26% 40%", columns: "21% 79%" },
            rooms: [
                {
                    name: "Escalier4",
                    type: constants.STAIRS_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 1, end: 2 } },
                    seats: 0,
                },
                {
                    name: "Couloir2",
                    type: constants.PASSING_TYPE,
                    gridPosition: { rows: { start: 2, end: 4 }, columns: { start: 1, end: 2 } },
                    seats: 0,
                },
                {
                    name: "Chambre de Mapie",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 1, end: 3 }, columns: { start: 2, end: 3 } },
                    seats: 2,
                },
                {
                    name: "Petite Chambre",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 3, end: 4 }, columns: { start: 2, end: 3 } },
                    seats: 2,
                },
                {
                    name: "Chambre Parentale",
                    type: constants.BEDROOM_TYPE,
                    gridPosition: { rows: { start: 4, end: 5 }, columns: { start: 1, end: 3 } },
                    seats: 3,
                },
            ],
        },
        {
            name: "Extérieur",
            size: { width: 3.54, height: 7.73 },
            gridTemplate: { rows: "30% 70%", columns: "45% 55%" },
            rooms: [
                {
                    name: "Plat",
                    type: constants.GARDEN_TYPE,
                    gridPosition: { rows: { start: 1, end: 2 }, columns: { start: 1, end: 2 } },
                    seats: 10,
                },
                {
                    name: "Incliné",
                    type: constants.GARDEN_TYPE,
                    gridPosition: { rows: { start: 2, end: 3 }, columns: { start: 1, end: 2 } },
                    seats: 0,
                },
                {
                    name: "Chemin",
                    type: constants.GARDEN_TYPE,
                    gridPosition: { rows: { start: 1, end: 3 }, columns: { start: 2, end: 3 } },
                    seats: 0,
                },
            ],
        },
    ],
};
