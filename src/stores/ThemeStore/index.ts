import { observable } from 'mobx';

class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = 'light';
    }

    getCurrentTheme = () => {
        return this.selectedTheme;
    }

    setCurrentTheme = (theme) => {
        this.selectedTheme = theme;
    }

    onChangeTheme = () => {
        if (this.getCurrentTheme() === 'light') {
            this.setCurrentTheme('dark');
        }
        else {
            this.setCurrentTheme('light');
        }
    }
}

const themeStore = new ThemeStore();
export default themeStore;
