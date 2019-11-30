import $ from 'jquery';

const Age = {
    init() {
        const currentYear = new Date().getFullYear();
        $('.age').text(currentYear - 1987);
    }
};
export default Age;
