// import React, { useState } from "react";
// import { Formik, Field, Form, FieldArray } from "formik";

// function Invoice() {
//   const [tax, setTax] = useState(0);

//   const getSubtotal = (items) => {
//     return items.reduce((total, item) => total + item.quantity * item.rate, 0);
//   };

//   const getTaxAmount = (subtotal) => {
//     return (subtotal * tax) / 100;
//   };

//   const getTotal = (subtotal) => {
//     return subtotal + getTaxAmount(subtotal);
//   };

//   return (
//     <Formik
//       initialValues={{
//         invoiceNumber: '',
//         invoiceDate: '',
//         dueDate: '',
//         from: '',
//         to: '',
//         items: [{ description: '', quantity: 1, rate: 0 }],
//         terms: '',
//         footnote: '',
//         amountPaid: 0,
//       }}
//       onSubmit={(values) => {
//         console.log('Invoice Submitted', values);
//       }}
//     >
//       {({ values, handleChange }) => {
//         const subtotal = getSubtotal(values.items);
//         const total = getTotal(subtotal);

//         return (
//           <Form className="container mx-auto p-8 bg-gray-50 w-[80%]">
//             {/* Header: Logo and Invoice Details */}
//             <div className="flex justify-between md:flex-row flex-col items-start mb-8">
//               {/* Logo Section */}
//               <div className="md:w-1/2 w-full">
//               <div className="border h-37 w-72 p-3 items-center border-gray-500 flex justify-center rounded-lg">
//                 <div className="h-24 w-64 bg-gray-100 flex items-center justify-center border border-dashed">
//                   <span className="text-center">Company LOGO</span>
//                 </div>
//                 </div>
//                 <button className="bg-purple-500 text-white px-4 py-2 mt-4 rounded relative ml-[75px] ">Upload Logo</button>
//               </div>

//               {/* Invoice Details */}
              
//               <div className="flex flex-col md:w-1/2 w-full space-y-4">
//     {/* Invoice Number */}
//     <div className="flex items-center border border-orange-300 rounded-full overflow-hidden relative">
//         <div className="w-2/4 flex justify-between items-center bg-orange-50">
//           <label htmlFor="invoiceNumber" className="px-4 w-2/3 text-left ">Invoice</label>
//           <div className="py-2 px-3 border border-orange-200">#</div>
//         </div>
//           <Field
//             name="invoiceNumber"
//             className="w-full p-2 focus:outline-none border-l border-orange-200"
//             placeholder="Enter Invoice #"
//           />
//         </div>

//         {/* Invoice Date */}
//         <div className="flex items-center border border-orange-300 bg-orange-50 rounded-full overflow-hidden ">
//           <label htmlFor="invoiceDate" className="w-1/3 px-4  text-left">Invoice Date</label>
//           <Field
//             type="date"
//             name="invoiceDate"
//             className="w-full p-2 focus:outline-none border-l border-orange-200"
//             placeholder="mm/dd/yyyy"
//           />
//         </div>

//         {/* Due Date */}
//         <div className="flex items-center border border-orange-300 bg-orange-50 rounded-full overflow-hidden ">
//           <label htmlFor="dueDate" className="w-1/3 px-4  text-left">Due Date</label>
//           <Field
//             type="date"
//             name="dueDate"
//             className="w-full p-2 focus:outline-none border-l border-orange-200"
//             placeholder="mm/dd/yyyy"
//           />
//         </div>
//         </div>
//             </div>

//            {/* Invoice From and To Section */}
// <div className="grid grid-cols-2 gap-4 mb-8">
//   {/* Invoice From */}
//   <div className="flex flex-col">
//     <label htmlFor="from" className="mb-2  text-gray-700 m-2">Invoice From</label>
//     <Field
//       name="from"
//       as="textarea"
//       className="border p-4 rounded-[15px] w-full focus:outline-none border-orange-200 focus:ring-2 focus:ring-orange-300"
//       placeholder="Who is this invoice from?"
//     />
//   </div>

//   {/* Invoice To */}
//   <div className="flex flex-col">
//     <label htmlFor="to" className="mb-2  text-gray-700 text-left m-2">Invoice To</label>
//     <Field
//       name="to"
//       as="textarea"
//       className="border p-4 rounded-[15px] border-orange-200 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
//       placeholder="Who is this invoice to?"
//     />
//   </div>
// </div>

//             {/* Items Table */}
//             <FieldArray name="items">
//               {({ push, remove }) => (
//                 <div>
//                   <table className="w-full mb-8 table-fixed border-collapse">
//                     <thead>
//                       <tr className="border-b">
//                         <th className="p-4 text-left">#</th>
//                         <th className="p-4 text-left">Item</th>
//                         <th className="p-4 text-left">Quantity</th>
//                         <th className="p-4 text-left">Rate</th>
//                         <th className="p-4 text-left">Amount</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {values.items.map((item, index) => (
//                         <tr key={index} className="border-b">
//                           <td className="p-4">{index + 1}</td>
//                           <td className="p-4">
//                             <Field
//                               name={`items.${index}.description`}
//                               className="border p-2 rounded w-full"
//                               placeholder="Item description"
//                             />
//                           </td>
//                           <td className="p-4">
//                             <Field
//                               name={`items.${index}.quantity`}
//                               type="number"
//                               min="1"
//                               className="border p-2 rounded w-full"
//                               placeholder="Quantity"
//                             />
//                           </td>
//                           <td className="p-4">
//                             <Field
//                               name={`items.${index}.rate`}
//                               type="number"
//                               min="0"
//                               className="border p-2 rounded w-full"
//                               placeholder="Rate"
//                             />
//                           </td>
//                           <td className="p-4">
//                             ${(item.quantity * item.rate).toFixed(2)}
//                           </td>
//                           <td className="p-4">
//                             <button type="button" onClick={() => remove(index)}>
//                               Remove
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <button
//                     type="button"
//                     onClick={() => push({ description: '', quantity: 1, rate: 0 })}
//                     className="bg-blue-500 text-white px-4 py-2 rounded mb-8"
//                   >
//                     + Add Item
//                   </button>
//                 </div>
//               )}
//             </FieldArray>

//             {/* Terms and Footnote */}
//             <div className="grid grid-cols-1 gap-4 mb-8">
//               <Field
//                 name="terms"
//                 as="textarea"
//                 className="border p-4 rounded"
//                 placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
//               />
//               <Field
//                 name="footnote"
//                 as="textarea"
//                 className="border p-4 rounded"
//                 placeholder="Thank you for your business"
//               />
//             </div>

//             {/* Summary Section */}
//             <div className="flex justify-end">
//               <div className="w-full max-w-xs space-y-4">
//                 <div className="flex justify-between">
//                   <span>Subtotal:</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Taxable Value (%):</span>
//                   <input
//                     type="number"
//                     className="border p-2 rounded w-16"
//                     value={tax}
//                     onChange={(e) => setTax(Math.max(0, Number(e.target.value)))}
//                   />
//                 </div>
//                 <div className="flex justify-between font-bold">
//                   <span>Total:</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Download / Clear Buttons */}
//             <div className="flex justify-end mt-8 space-x-4">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Download PDF
//               </button>
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={() => window.location.reload()}
//               >
//                 Clear
//               </button>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// }

// export default Invoice;
