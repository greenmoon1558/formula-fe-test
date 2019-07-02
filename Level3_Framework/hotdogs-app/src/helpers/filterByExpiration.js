const filterByExpiration = items => {
    // change this function to return only current items
    // where expirationDate > today's date
    let currentDate = Date.now();
    return items.filter(item => {
        let expirationDate = new Date(item.expirationDate);
        return expirationDate.getTime() > currentDate;
    });
};

export default filterByExpiration;