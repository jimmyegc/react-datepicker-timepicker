import React from 'react'


import dayjs from "dayjs";
import { DatePicker, DatePickerProps } from "antd";

import { Controller, useForm } from "react-hook-form";


interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const RHFDatePickerField = (props: RHFDatePickerFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required"
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <DatePicker
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
            />
            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export const RHFDatepicker = () => {
 
  const { handleSubmit, control, watch } = useForm<{
    startDate: string;
    endDate: string;
  }>();


  return (
    <form
      className="bg-light"
      onSubmit={handleSubmit((data) => {
        console.log("data ready to submit", data);
      })}
    >
      <button>Submit</button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere magni est nisi voluptas porro officiis suscipit vero ipsum temporibus possimus accusamus optio totam provident, voluptatem sequi fugit quas repellendus.
    Ducimus ad numquam id corporis facere hic dolorum vero, earum reiciendis esse saepe, ut, placeat fugit aut similique odit tempora ullam dignissimos dolores asperiores recusandae nesciunt ratione unde quos. Dolor?
    Sint minus autem explicabo soluta voluptatum molestias pariatur quaerat, officiis consectetur ad magnam! Illum, similique dicta eveniet alias sunt tenetur voluptas officiis. A quia quo error facilis ex nihil blanditiis.
    Veniam impedit eaque ad id cum accusantium! Non, odit sint. Consequatur qui numquam tempora nostrum facere officia? Fuga quaerat ex voluptate ipsa provident facilis. Consequuntur quos ipsa molestiae esse corrupti!
    Sit hic iste ab, quae debitis itaque quis dolorem voluptates, necessitatibus harum officiis quam fuga. Eum, suscipit voluptate, reprehenderit ex repudiandae accusamus modi natus ad dicta placeat error obcaecati quis!
    Praesentium rerum laborum sed alias aliquam tempore ad qui eveniet ex aliquid nam vero deleniti sint facilis, reprehenderit recusandae, quibusdam, libero harum dolorem eius laudantium similique. A recusandae repudiandae exercitationem.
    Laudantium quia iusto rem doloremque. Est vel distinctio perferendis ipsa, repellat atque ex nulla fugit inventore veniam sunt esse, reprehenderit vero! Magni repellat reiciendis accusantium id. Soluta eveniet consequuntur fugit.
    Quos consectetur sapiente dicta, beatae magnam ullam rerum? Ducimus, corrupti enim! Error minus tempora architecto incidunt quidem recusandae asperiores at optio delectus! Quis in dolorum possimus nihil, iusto id exercitationem?
    Possimus architecto ullam veniam, voluptatum cumque quia temporibus aperiam quam eaque exercitationem fuga illo ipsam porro dolorem ex? Eligendi asperiores explicabo eum eius, officia at? Rerum delectus commodi cumque adipisci!
    Libero harum quis velit debitis vitae tempore eum dolorem, rem aliquid vero consequuntur! Iusto, excepturi nam accusantium tempora doloribus, beatae earum praesentium veritatis amet optio natus corporis quae voluptates? Nam.
    Repellendus incidunt fugit veritatis at ipsa nesciunt perferendis magni, odio numquam itaque natus maxime quidem cum harum dolore nam! Voluptate perferendis nulla atque amet maxime quae alias quidem eos quisquam?
    Ea, voluptate ut, quasi id atque provident nam obcaecati sint unde est doloremque, nemo tempore sunt? Quo, dolorum ipsam dicta ab dolor eius qui omnis esse incidunt est eaque sint.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere magni est nisi voluptas porro officiis suscipit vero ipsum temporibus possimus accusamus optio totam provident, voluptatem sequi fugit quas repellendus.
      Ducimus ad numquam id corporis facere hic dolorum vero, earum reiciendis esse saepe, ut, placeat fugit aut similique odit tempora ullam dignissimos dolores asperiores recusandae nesciunt ratione unde quos. Dolor?
      Sint minus autem explicabo soluta voluptatum molestias pariatur quaerat, officiis consectetur ad magnam! Illum, similique dicta eveniet alias sunt tenetur voluptas officiis. A quia quo error facilis ex nihil blanditiis.
      Veniam impedit eaque ad id cum accusantium! Non, odit sint. Consequatur qui numquam tempora nostrum facere officia? Fuga quaerat ex voluptate ipsa provident facilis. Consequuntur quos ipsa molestiae esse corrupti!
      Sit hic iste ab, quae debitis itaque quis dolorem voluptates, necessitatibus harum officiis quam fuga. Eum, suscipit voluptate, reprehenderit ex repudiandae accusamus modi natus ad dicta placeat error obcaecati quis!
      Praesentium rerum laborum sed alias aliquam tempore ad qui eveniet ex aliquid nam vero deleniti sint facilis, reprehenderit recusandae, quibusdam, libero harum dolorem eius laudantium similique. A recusandae repudiandae exercitationem.
      Laudantium quia iusto rem doloremque. Est vel distinctio perferendis ipsa, repellat atque ex nulla fugit inventore veniam sunt esse, reprehenderit vero! Magni repellat reiciendis accusantium id. Soluta eveniet consequuntur fugit.
      Quos consectetur sapiente dicta, beatae magnam ullam rerum? Ducimus, corrupti enim! Error minus tempora architecto incidunt quidem recusandae asperiores at optio delectus! Quis in dolorum possimus nihil, iusto id exercitationem?
      Possimus architecto ullam veniam, voluptatum cumque quia temporibus aperiam quam eaque exercitationem fuga illo ipsam porro dolorem ex? Eligendi asperiores explicabo eum eius, officia at? Rerum delectus commodi cumque adipisci!
      Libero harum quis velit debitis vitae tempore eum dolorem, rem aliquid vero consequuntur! Iusto, excepturi nam accusantium tempora doloribus, beatae earum praesentium veritatis amet optio natus corporis quae voluptates? Nam.
      Repellendus incidunt fugit veritatis at ipsa nesciunt perferendis magni, odio numquam itaque natus maxime quidem cum harum dolore nam! Voluptate perferendis nulla atque amet maxime quae alias quidem eos quisquam?
      Ea, voluptate ut, quasi id atque provident nam obcaecati sint unde est doloremque, nemo tempore sunt? Quo, dolorum ipsam dicta ab dolor eius qui omnis esse incidunt est eaque sint.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere magni est nisi voluptas porro officiis suscipit vero ipsum temporibus possimus accusamus optio totam provident, voluptatem sequi fugit quas repellendus.
      Ducimus ad numquam id corporis facere hic dolorum vero, earum reiciendis esse saepe, ut, placeat fugit aut similique odit tempora ullam dignissimos dolores asperiores recusandae nesciunt ratione unde quos. Dolor?
      Sint minus autem explicabo soluta voluptatum molestias pariatur quaerat, officiis consectetur ad magnam! Illum, similique dicta eveniet alias sunt tenetur voluptas officiis. A quia quo error facilis ex nihil blanditiis.
      Veniam impedit eaque ad id cum accusantium! Non, odit sint. Consequatur qui numquam tempora nostrum facere officia? Fuga quaerat ex voluptate ipsa provident facilis. Consequuntur quos ipsa molestiae esse corrupti!
      Sit hic iste ab, quae debitis itaque quis dolorem voluptates, necessitatibus harum officiis quam fuga. Eum, suscipit voluptate, reprehenderit ex repudiandae accusamus modi natus ad dicta placeat error obcaecati quis!
      Praesentium rerum laborum sed alias aliquam tempore ad qui eveniet ex aliquid nam vero deleniti sint facilis, reprehenderit recusandae, quibusdam, libero harum dolorem eius laudantium similique. A recusandae repudiandae exercitationem.
      Laudantium quia iusto rem doloremque. Est vel distinctio perferendis ipsa, repellat atque ex nulla fugit inventore veniam sunt esse, reprehenderit vero! Magni repellat reiciendis accusantium id. Soluta eveniet consequuntur fugit.
      Quos consectetur sapiente dicta, beatae magnam ullam rerum? Ducimus, corrupti enim! Error minus tempora architecto incidunt quidem recusandae asperiores at optio delectus! Quis in dolorum possimus nihil, iusto id exercitationem?
      Possimus architecto ullam veniam, voluptatum cumque quia temporibus aperiam quam eaque exercitationem fuga illo ipsam porro dolorem ex? Eligendi asperiores explicabo eum eius, officia at? Rerum delectus commodi cumque adipisci!
      Libero harum quis velit debitis vitae tempore eum dolorem, rem aliquid vero consequuntur! Iusto, excepturi nam accusantium tempora doloribus, beatae earum praesentium veritatis amet optio natus corporis quae voluptates? Nam.
      Repellendus incidunt fugit veritatis at ipsa nesciunt perferendis magni, odio numquam itaque natus maxime quidem cum harum dolore nam! Voluptate perferendis nulla atque amet maxime quae alias quidem eos quisquam?
      Ea, voluptate ut, quasi id atque provident nam obcaecati sint unde est doloremque, nemo tempore sunt? Quo, dolorum ipsam dicta ab dolor eius qui omnis esse incidunt est eaque sint.</p>
      <div>
        <span>{JSON.stringify(watch("startDate"))}</span>
        <br />
        <RHFDatePickerField
          placeholder="Start Date"
          control={control}
          name="startDate"
        />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere magni est nisi voluptas porro officiis suscipit vero ipsum temporibus possimus accusamus optio totam provident, voluptatem sequi fugit quas repellendus.
      Ducimus ad numquam id corporis facere hic dolorum vero, earum reiciendis esse saepe, ut, placeat fugit aut similique odit tempora ullam dignissimos dolores asperiores recusandae nesciunt ratione unde quos. Dolor?
      Sint minus autem explicabo soluta voluptatum molestias pariatur quaerat, officiis consectetur ad magnam! Illum, similique dicta eveniet alias sunt tenetur voluptas officiis. A quia quo error facilis ex nihil blanditiis.
      Veniam impedit eaque ad id cum accusantium! Non, odit sint. Consequatur qui numquam tempora nostrum facere officia? Fuga quaerat ex voluptate ipsa provident facilis. Consequuntur quos ipsa molestiae esse corrupti!
      Sit hic iste ab, quae debitis itaque quis dolorem voluptates, necessitatibus harum officiis quam fuga. Eum, suscipit voluptate, reprehenderit ex repudiandae accusamus modi natus ad dicta placeat error obcaecati quis!
      Praesentium rerum laborum sed alias aliquam tempore ad qui eveniet ex aliquid nam vero deleniti sint facilis, reprehenderit recusandae, quibusdam, libero harum dolorem eius laudantium similique. A recusandae repudiandae exercitationem.
      Laudantium quia iusto rem doloremque. Est vel distinctio perferendis ipsa, repellat atque ex nulla fugit inventore veniam sunt esse, reprehenderit vero! Magni repellat reiciendis accusantium id. Soluta eveniet consequuntur fugit.
      Quos consectetur sapiente dicta, beatae magnam ullam rerum? Ducimus, corrupti enim! Error minus tempora architecto incidunt quidem recusandae asperiores at optio delectus! Quis in dolorum possimus nihil, iusto id exercitationem?
      Possimus architecto ullam veniam, voluptatum cumque quia temporibus aperiam quam eaque exercitationem fuga illo ipsam porro dolorem ex? Eligendi asperiores explicabo eum eius, officia at? Rerum delectus commodi cumque adipisci!
      Libero harum quis velit debitis vitae tempore eum dolorem, rem aliquid vero consequuntur! Iusto, excepturi nam accusantium tempora doloribus, beatae earum praesentium veritatis amet optio natus corporis quae voluptates? Nam.
      Repellendus incidunt fugit veritatis at ipsa nesciunt perferendis magni, odio numquam itaque natus maxime quidem cum harum dolore nam! Voluptate perferendis nulla atque amet maxime quae alias quidem eos quisquam?
      Ea, voluptate ut, quasi id atque provident nam obcaecati sint unde est doloremque, nemo tempore sunt? Quo, dolorum ipsam dicta ab dolor eius qui omnis esse incidunt est eaque sint.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere magni est nisi voluptas porro officiis suscipit vero ipsum temporibus possimus accusamus optio totam provident, voluptatem sequi fugit quas repellendus.
      Ducimus ad numquam id corporis facere hic dolorum vero, earum reiciendis esse saepe, ut, placeat fugit aut similique odit tempora ullam dignissimos dolores asperiores recusandae nesciunt ratione unde quos. Dolor?
      Sint minus autem explicabo soluta voluptatum molestias pariatur quaerat, officiis consectetur ad magnam! Illum, similique dicta eveniet alias sunt tenetur voluptas officiis. A quia quo error facilis ex nihil blanditiis.
      Veniam impedit eaque ad id cum accusantium! Non, odit sint. Consequatur qui numquam tempora nostrum facere officia? Fuga quaerat ex voluptate ipsa provident facilis. Consequuntur quos ipsa molestiae esse corrupti!
      Sit hic iste ab, quae debitis itaque quis dolorem voluptates, necessitatibus harum officiis quam fuga. Eum, suscipit voluptate, reprehenderit ex repudiandae accusamus modi natus ad dicta placeat error obcaecati quis!
      Praesentium rerum laborum sed alias aliquam tempore ad qui eveniet ex aliquid nam vero deleniti sint facilis, reprehenderit recusandae, quibusdam, libero harum dolorem eius laudantium similique. A recusandae repudiandae exercitationem.
      Laudantium quia iusto rem doloremque. Est vel distinctio perferendis ipsa, repellat atque ex nulla fugit inventore veniam sunt esse, reprehenderit vero! Magni repellat reiciendis accusantium id. Soluta eveniet consequuntur fugit.
      Quos consectetur sapiente dicta, beatae magnam ullam rerum? Ducimus, corrupti enim! Error minus tempora architecto incidunt quidem recusandae asperiores at optio delectus! Quis in dolorum possimus nihil, iusto id exercitationem?
      Possimus architecto ullam veniam, voluptatum cumque quia temporibus aperiam quam eaque exercitationem fuga illo ipsam porro dolorem ex? Eligendi asperiores explicabo eum eius, officia at? Rerum delectus commodi cumque adipisci!
      Libero harum quis velit debitis vitae tempore eum dolorem, rem aliquid vero consequuntur! Iusto, excepturi nam accusantium tempora doloribus, beatae earum praesentium veritatis amet optio natus corporis quae voluptates? Nam.
      Repellendus incidunt fugit veritatis at ipsa nesciunt perferendis magni, odio numquam itaque natus maxime quidem cum harum dolore nam! Voluptate perferendis nulla atque amet maxime quae alias quidem eos quisquam?
      Ea, voluptate ut, quasi id atque provident nam obcaecati sint unde est doloremque, nemo tempore sunt? Quo, dolorum ipsam dicta ab dolor eius qui omnis esse incidunt est eaque sint.</p>
        <br />
        <RHFDatePickerField
          placeholder="End Date"
          control={control}
          name="endDate"
        />
      </div>
      <br />
      
    </form>
  );
}
