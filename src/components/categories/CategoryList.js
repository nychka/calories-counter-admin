import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import TimeAgo from 'react-timeago'

class CategoryList extends React.Component{
    render(){
        return(
            <div className="container productList">
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                { this.props.categories.map(product => {
                    let lang_en = product.lang !== null && product.lang.en;

                    return (<tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td><img className="" height="50px" src={product.image} alt={product.image} /></td>
                        <td>{lang_en}</td>
                        <td><TimeAgo date={product.created_at} /></td>
                        <td>
                            { (product.created_at !== product.updated_at) ?
                            <TimeAgo date={product.updated_at} />
                                : '-' }
                        </td>
                        <td><Link to={{ pathname: `/categories/${product.id}/edit`, state: { product: product } }}>Edit</Link></td>
                        <td><Button onClick={this.props.removeHandler.bind(this, product)}>Remove</Button></td>
                            </tr>)
                }) }
                    </tbody>
                </Table>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.props.totalPages}
                    onPageChange={this.props.pageHandler}
                    containerClassName={"pagination justify-content-center"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                />
            </div>
        )
    }
}

export default CategoryList;