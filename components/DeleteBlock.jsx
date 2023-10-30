"use client";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useMutation } from "react-query";

const deleteTicket = async (id) => {
  try {
    const { data } = await axios.delete(
      `http://backend-blond-mu.vercel.app/api/tickets/delete-ticket/${id}`
    );
    return data;
  } catch (error) {
    throw new Error("Error occurred: " + error);
  }
};

const DeleteBlock = ({ id }) => { // Pass 'id' as a prop
  const mutation = useMutation(deleteTicket, {
    onSuccess: (data) => {
      console.log("Data", data);
      window.location.reload();
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });
  const handleDelete = () => {
    mutation.mutate(id);
  };
  return (
    <div className="text-white">
      <CloseIcon
        onClick={handleDelete}
        style={{ color: "gray", fontSize: "24px" }}
      />
    </div>
  );
};

export default DeleteBlock;

