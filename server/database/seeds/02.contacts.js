exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Kristo Toth",
          address: "02184 Kensington Plaza",
          mobile: "902-494-4482",
          work: "290-566-0888",
          home: "330-434-3370",
          email: "ktoth0@jalbum.net",
          twitter: "ktoth0",
          instagram: "ktoth0",
          github: "ktoth0",
          created_by: 4
        },
        {
          name: "Nonna Sergent",
          address: "56993 Bobwhite Way",
          mobile: "846-403-9542",
          work: "556-481-5104",
          home: "853-226-2950",
          email: "nsergent1@bing.com",
          twitter: "nsergent1",
          instagram: "nsergent1",
          github: "nsergent1",
          created_by: 3
        },
        {
          name: "Raf McKall",
          address: "7816 Park Meadow Way",
          mobile: "736-504-6044",
          work: "905-192-2478",
          home: "540-517-3547",
          email: "rmckall2@behance.net",
          twitter: "rmckall2",
          instagram: "rmckall2",
          github: "rmckall2",
          created_by: 5
        },
        {
          name: "Modesta Windle",
          address: "2 Sheridan Court",
          mobile: "230-454-7898",
          work: "621-506-5998",
          home: "561-455-3378",
          email: "mwindle3@printfriendly.com",
          twitter: "mwindle3",
          instagram: "mwindle3",
          github: "mwindle3",
          created_by: 5
        },
        {
          name: "Isabeau Fehner",
          address: "56592 Talisman Parkway",
          mobile: "450-666-5767",
          work: "250-775-1169",
          home: "689-134-7508",
          email: "ifehner4@t-online.de",
          twitter: "ifehner4",
          instagram: "ifehner4",
          github: "ifehner4",
          created_by: 4
        },
        {
          name: "Josephine Aspinell",
          address: "29 Logan Trail",
          mobile: "655-181-2265",
          work: "450-350-6697",
          home: "356-866-9124",
          email: "jaspinell5@networksolutions.com",
          twitter: "jaspinell5",
          instagram: "jaspinell5",
          github: "jaspinell5",
          created_by: 1
        },
        {
          name: "Catriona Ingleston",
          address: "348 Hooker Center",
          mobile: "202-972-1331",
          work: "361-231-2251",
          home: "801-745-4144",
          email: "cingleston6@usgs.gov",
          twitter: "cingleston6",
          instagram: "cingleston6",
          github: "cingleston6",
          created_by: 2
        },
        {
          name: "Tasia Ridolfi",
          address: "3 Hoepker Crossing",
          mobile: "374-623-9724",
          work: "388-779-4760",
          home: "753-105-1968",
          email: "tridolfi7@globo.com",
          twitter: "tridolfi7",
          instagram: "tridolfi7",
          github: "tridolfi7",
          created_by: 4
        },
        {
          name: "Cassaundra Garey",
          address: "78 Memorial Plaza",
          mobile: "884-101-4167",
          work: "350-320-8581",
          home: "176-203-5668",
          email: "cgarey8@networkadvertising.org",
          twitter: "cgarey8",
          instagram: "cgarey8",
          github: "cgarey8",
          created_by: 3
        },
        {
          name: "Clare Robey",
          address: "505 7th Terrace",
          mobile: "283-985-0281",
          work: "891-294-5221",
          home: "397-527-4047",
          email: "crobey9@ibm.com",
          twitter: "crobey9",
          instagram: "crobey9",
          github: "crobey9",
          created_by: 5
        },
        {
          name: "Nicolais Struthers",
          address: "6871 Londonderry Park",
          mobile: "858-266-2248",
          work: "174-713-1299",
          home: "328-702-6941",
          email: "nstruthersa@buzzfeed.com",
          twitter: "nstruthersa",
          instagram: "nstruthersa",
          github: "nstruthersa",
          created_by: 3
        },
        {
          name: "Gabey Macvain",
          address: "59511 Stone Corner Avenue",
          mobile: "272-731-1572",
          work: "509-432-0373",
          home: "883-186-5645",
          email: "gmacvainb@salon.com",
          twitter: "gmacvainb",
          instagram: "gmacvainb",
          github: "gmacvainb",
          created_by: 4
        },
        {
          name: "Mae Petkens",
          address: "2 Rutledge Avenue",
          mobile: "696-618-7674",
          work: "911-110-9695",
          home: "115-424-8091",
          email: "mpetkensc@guardian.co.uk",
          twitter: "mpetkensc",
          instagram: "mpetkensc",
          github: "mpetkensc",
          created_by: 5
        },
        {
          name: "Fredericka Theobald",
          address: "8 Gateway Pass",
          mobile: "836-779-1310",
          work: "594-367-3541",
          home: "626-916-4798",
          email: "ftheobaldd@artisteer.com",
          twitter: "ftheobaldd",
          instagram: "ftheobaldd",
          github: "ftheobaldd",
          created_by: 4
        },
        {
          name: "Ernestus Verissimo",
          address: "81236 Donald Junction",
          mobile: "848-879-7467",
          work: "100-673-7326",
          home: "349-231-6906",
          email: "everissimoe@delicious.com",
          twitter: "everissimoe",
          instagram: "everissimoe",
          github: "everissimoe",
          created_by: 2
        },
        {
          name: "Averyl Isard",
          address: "6712 Coleman Way",
          mobile: "429-669-3140",
          work: "131-972-3382",
          home: "228-971-2512",
          email: "aisardf@bbb.org",
          twitter: "aisardf",
          instagram: "aisardf",
          github: "aisardf",
          created_by: 1
        },
        {
          name: "Myrilla Maycock",
          address: "62468 Pine View Pass",
          mobile: "726-609-2370",
          work: "728-197-6025",
          home: "788-741-9772",
          email: "mmaycockg@businesswire.com",
          twitter: "mmaycockg",
          instagram: "mmaycockg",
          github: "mmaycockg",
          created_by: 1
        },
        {
          name: "Shepard Candey",
          address: "0 Corscot Alley",
          mobile: "264-525-8542",
          work: "841-579-3462",
          home: "307-789-0138",
          email: "scandeyh@bizjournals.com",
          twitter: "scandeyh",
          instagram: "scandeyh",
          github: "scandeyh",
          created_by: 2
        },
        {
          name: "Gilemette Bruins",
          address: "7383 Tomscot Trail",
          mobile: "956-127-5157",
          work: "873-306-6111",
          home: "292-775-2088",
          email: "gbruinsi@github.com",
          twitter: "gbruinsi",
          instagram: "gbruinsi",
          github: "gbruinsi",
          created_by: 2
        },
        {
          name: "Amandy Espinas",
          address: "582 Marcy Place",
          mobile: "338-583-1086",
          work: "330-809-4144",
          home: "171-167-7973",
          email: "aespinasj@un.org",
          twitter: "aespinasj",
          instagram: "aespinasj",
          github: "aespinasj",
          created_by: 5
        },
        {
          name: "Wat Stenning",
          address: "41131 Old Gate Avenue",
          mobile: "982-306-9241",
          work: "199-450-3347",
          home: "240-830-8969",
          email: "wstenningk@hp.com",
          twitter: "wstenningk",
          instagram: "wstenningk",
          github: "wstenningk",
          created_by: 5
        },
        {
          name: "Dare Casado",
          address: "34633 Vera Parkway",
          mobile: "152-563-0099",
          work: "833-931-2436",
          home: "732-760-6878",
          email: "dcasadol@bizjournals.com",
          twitter: "dcasadol",
          instagram: "dcasadol",
          github: "dcasadol",
          created_by: 1
        },
        {
          name: "Adella Rosenblum",
          address: "558 Northland Road",
          mobile: "848-508-3754",
          work: "233-524-1449",
          home: "816-902-8826",
          email: "arosenblumm@oakley.com",
          twitter: "arosenblumm",
          instagram: "arosenblumm",
          github: "arosenblumm",
          created_by: 1
        },
        {
          name: "Julianna McGawn",
          address: "84698 Goodland Crossing",
          mobile: "672-337-8127",
          work: "482-556-1571",
          home: "134-535-3474",
          email: "jmcgawnn@tumblr.com",
          twitter: "jmcgawnn",
          instagram: "jmcgawnn",
          github: "jmcgawnn",
          created_by: 2
        },
        {
          name: "Nilson Mattiello",
          address: "13941 Namekagon Circle",
          mobile: "827-221-5205",
          work: "920-453-7284",
          home: "299-622-7849",
          email: "nmattielloo@sphinn.com",
          twitter: "nmattielloo",
          instagram: "nmattielloo",
          github: "nmattielloo",
          created_by: 2
        },
        {
          name: "Layne Canniffe",
          address: "72822 Arkansas Plaza",
          mobile: "574-297-3207",
          work: "243-427-1162",
          home: "258-783-4055",
          email: "lcanniffep@cmu.edu",
          twitter: "lcanniffep",
          instagram: "lcanniffep",
          github: "lcanniffep",
          created_by: 4
        },
        {
          name: "Evita Fettiplace",
          address: "4 Mcbride Park",
          mobile: "669-329-8030",
          work: "664-990-6552",
          home: "862-762-8146",
          email: "efettiplaceq@state.gov",
          twitter: "efettiplaceq",
          instagram: "efettiplaceq",
          github: "efettiplaceq",
          created_by: 3
        },
        {
          name: "Sheeree Wieprecht",
          address: "20 Sullivan Point",
          mobile: "384-751-5426",
          work: "517-342-5602",
          home: "620-832-1089",
          email: "swieprechtr@edublogs.org",
          twitter: "swieprechtr",
          instagram: "swieprechtr",
          github: "swieprechtr",
          created_by: 1
        },
        {
          name: "Ronna Frary",
          address: "517 Prentice Hill",
          mobile: "736-461-9107",
          work: "870-212-9265",
          home: "384-619-3557",
          email: "rfrarys@com.com",
          twitter: "rfrarys",
          instagram: "rfrarys",
          github: "rfrarys",
          created_by: 2
        },
        {
          name: "Modesty Harmson",
          address: "856 Service Junction",
          mobile: "963-408-7373",
          work: "935-594-2292",
          home: "616-150-9368",
          email: "mharmsont@yale.edu",
          twitter: "mharmsont",
          instagram: "mharmsont",
          github: "mharmsont",
          created_by: 2
        }
      ]);
    });
};
