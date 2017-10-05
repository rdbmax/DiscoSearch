import React from 'react';
import PropTypes from 'prop-types';
import LoaderCircles from 'react-canvas-loaders/dist/loader-circles';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Catalog.css';
import withConnect from './withConnect';

const CONTAINER_STYLE = {
  height: 'calc(100vh - 95px)',
  marginTop: '10px',
};

const TABLE_STYLE = {
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  fontFamily: 'Oswald, sans-serif',
  color: 'white',
};

const dataGridColumns = [{
  Header: 'Titre',
  accessor: 'title',
}, {
  Header: 'Artiste',
  accessor: d => d.artist.name,
  id: 'artistName',
}];

const Catalog = ({ isSearching, songs }) => (
  <div style={CONTAINER_STYLE}>
    <ReactTable
      data={songs}
      columns={dataGridColumns}
      showPagination={false}
      style={TABLE_STYLE}
      NoDataComponent={() => null}
    />
    { isSearching && <LoaderCircles colorCircles='rgba(0, 0, 0, 0.2)' /> }
  </div>
);

Catalog.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};

export default withConnect(Catalog);
