docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ehksperiment/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ehksperiment/app ../..
