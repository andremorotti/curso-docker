FROM python:3.9
WORKDIR /api01
COPY ./requirements.txt /api01/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /api01/requirements.txt
COPY . /api01
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000" ]
