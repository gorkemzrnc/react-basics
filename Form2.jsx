import React, { useState } from 'react';

function Form2() {
  const [form, setForm] = useState({ name: '', surname: '', gender: '' });

  return (
    <div>
      <div>
        <div>İsim Soyisim</div>
        <input
          placeholder="İsim"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>

      <br />
      <br />

      <div>
        İsim:
        <strong>{form.name}</strong>
      </div>
    </div>
  );
}

export default Form2;
