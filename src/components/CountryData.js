import React from 'react';
import MaterialTable from 'material-table';

class CountryData extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading:false,
    stats: [],
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://corona.lmao.ninja/v2/countries?') 
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
            console.log(error)
        })
}
  render() {
    return (
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px' ,fontSize: '14px'}}
          title={<b>Worldwide Covid-19 Stats</b>}
          columns={[
            { title: 'Country', field: 'country' },
            { title: 'Total Cases', field: 'cases' },
            { title: 'Current Cases', field: 'todayCases' },
            { title: 'Total Deaths', field: 'deaths', type: 'text' },
            { title: 'Current Deaths', field: 'todayDeaths' },
            { title: 'Recovered Patients', field: 'recovered' },
            { title: 'Active Patients', field: 'active' },
        
            
          ]}
          data={this.state.stats}
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh',
              isFreeAction: true,
              onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            }, 
          ]}
          options={{
            
            headerStyle: {
              backgroundColor: '#000000',
              color: '#FFFF',
              fontSize: '12px',
            }}
          }
          
        />
        <br/><br/><br/>
      </React.Fragment>
    )
  }
}
export default CountryData;