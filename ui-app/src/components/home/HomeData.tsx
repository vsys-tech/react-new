import {BooksProps} from "../../types/BooksProps.ts";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const HomeData = (props: { books: BooksProps[] }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>_id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Publisher</TableCell>
                            <TableCell align="right">Published Date</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.books.map((book: BooksProps) => (
                            <TableRow
                                key={book._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {book._id}
                                </TableCell>
                                <TableCell align="right">{book.title}</TableCell>
                                <TableCell align="right">{book.author}</TableCell>
                                <TableCell align="right">{book.publisher}</TableCell>
                                <TableCell align="right">{book.published_date}</TableCell>
                                <TableCell align="right">{book.price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default HomeData;