const screen = document.querySelector(".screen");

        let screenNumber = "0",
            result,
            partA,
            partB,
            operatorType,
            helper = 0;

        screen.innerHTML = screenNumber;

        function printOnScreen(x) {
            if (x === ".") {
                screen.innerHTML = (+screenNumber).toLocaleString() + ".";
            } else {
                screen.innerHTML = (+screenNumber).toLocaleString();
            }
        }

        function setNum(x) {
            if (helper) {
                screenNumber = "";
                helper = 0;
            }
            if (screenNumber === "0") {
                screenNumber = "";
            }
            screenNumber = screenNumber + x;
            printOnScreen(x);
        }

        function operate(type) {
            if (partA) {
                partB = +screenNumber;
                if (partA && partB) {
                    calculate();
                }
            } else {
                console.log("a");
                partA = +screenNumber;
            }
            screenNumber = "";
            operatorType = type;
            console.log(partA);
            helper = 1;
        }

        function calculate() {
            if (!partB && screenNumber.length > 0) {
                partB = +screenNumber;
            }
            if (partB) {
                switch (operatorType) {
                    case "+":
                        result = partA + partB;
                        break;
                    case "-":
                        result = partA - partB;
                        break;
                    case "*":
                        result = partA * partB;
                        break;
                    default:
                        result = partA / partB;
                }
                partA = result;
                screen.innerHTML = (+result).toLocaleString();
            }

            helper = 1;
            partB = null; 
            screenNumber = "";
        }
