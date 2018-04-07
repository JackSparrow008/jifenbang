Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable: VueBootstrapTable
    },
    data: {
        logging: [],
        showFilter: true,
        showPicker: true,
        paginated: true,
        multiColumnSortable: true,
        ajax: {
            enabled: false,
            url: "http://localhost:9430/data/test",
            method: "POST",
            delegate: true,
        },
        columns: [
            {
                title:"排名",
                visible: true,
                editable: false,
            },
            {
                title:"姓名",
                name: "name",
                visible: true,
                editable: true,
            },
            {
                title:"积分",
                name:"integral",
                visible: true,
                editable: true,
            },
            {
                title:"明细",
                name:"details",
                visible: true,
                editable: true,
            }
        ],
        values: [
            {
                "排名": 1,
                "name": "徐总",
                "integral": "600",
                "details": 25,
            },
            {
                "排名": 2,
                "name": "王总",
                "integral": "500",
                "details": 30,
            },
            {
                "排名": 3,
                "name": "张姐",
                "integral": "450",
                "details": 20,
            },
            {
                "排名": 4,
                "name": "小闫",
                "integral": "450",
                "details": 20,
            },
            {
                "排名": 5,
                "name": "佳倩",
                "integral": "400",
                "details": 20,
            },
            {
                "排名": 6,
                "name": "紫薇",
                "integral": "350",
                "details": 20,
            },
            {
                "排名": 7,
                "name": "小胖",
                "integral": "300",
                "details": 20,
            },
            {
                "排名": 8,
                "name": "洛奇",
                "integral": "200",
                "details": 20,
            },
            {
                "排名": 9,
                "name": "小陈",
                "integral": "150",
                "details": 20,
            },
            {
                "排名": 10,
                "name": "小卢",
                "integral": "100",
                "details": 20,
            },
            {
                "排名": 11,
                "name": "小明",
                "integral": "90",
                "details": 20,
            }
        ]
    },
    ready: function () {
    },
    methods: {
        addItem: function() {
            var self = this;
            var item = {
                "id" : this.values.length + 1,
                "name": "name " + (this.values.length+1),
                "country": "Portugal",
                "age": 26,
            };
            this.values.push(item);
        },
        toggleFilter: function() {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function() {
            this.showPicker = !this.showPicker;
        },
        togglePagination: function () {
            this.paginated = !this.paginated;
        }
    },
    events: {
        cellDataModifiedEvent: function( originalValue, newValue, columnTitle, entry) {
            this.logging.push("Original Value : " + originalValue +
                         " | New Value : " + newValue +
                         " | Column : " + columnTitle +
                         " | Complete Entry : " +  entry );
        },
    },
});