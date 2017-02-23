for (let i = 0; i < 2; i++) {
    System.import("./modules/module" + i).then((module) => module.default());
}
