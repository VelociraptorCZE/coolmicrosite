export default {
    imageBlock: {
        inputs: {
            url: {
                value: ""
            },
            width: {
                value: "100%"
            },
            height: {
                value: "auto"
            },
            alt: {
                value: ""
            },
            align: {
                value: "align-block-left",
                options: ["align-block-left", "align-block-right", "align-block-center"]
            }
        }
    },
    textBlock: {
        inputs: {
            color: {
                value: "#000",
                type: "color"
            },
            width: {
                value: "100%"
            },
            fontSize: {
                value: "24px"
            },
            text: {
                value: ""
            },
            align: {
                value: "align-text-left",
                options: ["align-text-left", "align-text-right", "align-text-center"]
            }
        }
    }
}