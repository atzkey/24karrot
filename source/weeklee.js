export const week = () => {
    //const dateFrom = new Date('2020-04-20');
    const dateFrom = new Date('2020-10-12');

    const dateTo = new Date();
    let w = Math.ceil((dateTo - dateFrom)/(1000*60*60*24*7));

    if(w < 1 || w > 22) { w = '∞'; }

    return w;
};
