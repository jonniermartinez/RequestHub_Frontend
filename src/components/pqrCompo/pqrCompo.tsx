import * as React from "react";
import ImageCompo from "../imageCompo/ImageCompo.tsx";
import "./style-pqrCompo.css";

// UIIIII
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  empresa: string;
}

const PQRCompo: React.FC<Props> = ({ empresa }) => {
  return (
    <>
      <div className="row">
        <ImageCompo
          texto="RequestHub"
          url="src/components/imageCompo/img/img_pqr.svg"
        />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm content-all-fields">
          <div className="content-fields pqr">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-login">
              PQR
            </h2>
          </div>

          <p className="mt-6 text-base leading-7 text-gray-500 small-text">
            Estas a punto de llenar una pqr para la empresa {empresa}
          </p>

          <div className="content-fields">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Name"
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5| focus:ring-inset sm:text-sm sm:leading-6 field"
              />
            </div>
          </div>

          <div className="content-fields">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Last Name"
                id="LastName"
                name="LastName"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
              />
            </div>
          </div>

          <div className="content-fields">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Phone"
                id="Phone"
                name="Phone"
                type="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
              />
            </div>
          </div>

          <div className="content-fields">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Your message
            </label>
            <div className="lb">
              <textarea
                placeholder="Describe..."
                name="comment"
                id="comment"
                rows={4}
                className="sm:text-sm field w-full ring-1 ring-inset ring-gray-300"
              ></textarea>
            </div>
          </div>

          <div className="content-fields">
            <Select>
              <SelectTrigger className="w-[385px] h-[36px] content-fields">
                <SelectValue className="field" placeholder="Type of PQR" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categorías</SelectLabel>
                  <SelectItem value="Opción 1">Opción 1</SelectItem>
                  <SelectItem value="Opción 2">Opción 2</SelectItem>
                  <SelectItem value="Opción 3">Opción 3</SelectItem>
                  <SelectItem value="Opción 4">Opción 4</SelectItem>
                  <SelectItem value="Opción 5">Opción 5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="content-fields">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Subject
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Subject"
                id="subject"
                name="subjet"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-5 focus:ring-inset sm:text-sm sm:leading-6 field"
              />
            </div>
          </div>

          <div className="content-fields">
            <button type="submit" className="btn-enviar ">
              Enviar PQR
            </button>
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default PQRCompo;
