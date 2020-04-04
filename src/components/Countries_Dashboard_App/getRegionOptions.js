import React from 'react';

class GetRegionOptions extends React.PureComponent {

    id = 0;

    render() {
        let filterRegions = ['All'];
        let eachCountryRegions = [...new Set(this.props.countries.map(eachCountry => eachCountry.region))];
        filterRegions = filterRegions.concat(eachCountryRegions);
        let AllCountryRegions = filterRegions.map(eachRegion => {
            this.id += 1;
            return <option key={this.id} value={eachRegion}>{eachRegion}</option>;
        });
        return (
            <select onChange={this.props.filterCountriesBySelectedRegion}>
                {AllCountryRegions}
            </select>
        );
    }
}

export { GetRegionOptions };
